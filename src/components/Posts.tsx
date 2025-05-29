import Post from "@/components/Post";
import { Card } from "@/components/ui/card";
import DialogPostCreateEdit from "@/components/dialog-post-create-edit";
import DialogPostCreateDel from "@/components/dialog-post-delete";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ToolsBar from "@/components/toolsbar";
import { BlogType } from "@/types/blog";
const PAGE_SIZE = 5;

export default function InfiniteScrollFeed({
  onlyMe = false,
}: {
  onlyMe: boolean;
}) {
  const fetchStartAt = useRef(new Date().toISOString());
  const navigate = useNavigate();
  const gotoPost = (postId: number) => navigate(`/board/details/${postId}`);
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [page, setPage] = useState(0);
  const [dialogPost, setDialogPost] = useState(false);
  const [loading, setLoading] = useState(false);
  const loader = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [searhText, setSearhText] = useState<string>("");
  const [searhComuType, setSearhComuType] = useState<number | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      if (!hasMore || loading) return;
      setLoading(true);
      try {
        const path = `http://localhost:5000/blogs/feed${onlyMe ? "/me" : ""}`;
        const response = await fetch(
          `${path}?page=${page}&limit=${PAGE_SIZE}&startAt=${fetchStartAt.current}`
        );
        const text = await response.text();
        const result = text ? JSON.parse(text) : {};
        if (!response.ok) {
          throw new Error(
            String(
              result?.message ?? `Request failed with status ${response.status}`
            )
          );
        }
        setBlogs((prev) => {
          const existingIds = new Set(prev.map((b) => b.id));
          const filtered = result.data.filter(
            (b: BlogType) => !existingIds.has(b.id)
          );
          return [...prev, ...filtered];
        });

        setHasMore(result.hasMore);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setHasMore(false);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [page]);

  useEffect(() => {
    if (!loader.current) return;

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    observerRef.current.observe(loader.current);

    return () => observerRef.current?.disconnect();
  }, [loading, hasMore]);

  return (
    <div>
      <ToolsBar openDialogPost={() => setDialogPost(true)} />
      <ScrollArea className="rounded-md border h-screen">
        {blogs.map((blog: BlogType) => (
          <Card key={blog.id} onClick={() => gotoPost(blog.id)}>
            <Post {...blog} />
          </Card>
        ))}
        <div ref={loader} className="text-center p-4">
          {loading
            ? "Loading more..."
            : hasMore
            ? "Scroll down to load more"
            : "No more posts"}
        </div>
      </ScrollArea>
      <DialogPostCreateDel />
      <DialogPostCreateEdit status={dialogPost} setStatus={setDialogPost} />
    </div>
  );
}
