import Post from "@/components/Post";
import { Card } from "@/components/ui/card";
import DialogPostCreateEdit from "@/components/dialog-post-create-edit";
import DialogPostCreateDel from "@/components/dialog-post-delete";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import ToolsBar from "@/components/toolsbar";
const PAGE_SIZE = 5;
type Block = { id: number; content: string };
function fetchFakeData(page: number): Promise<Block[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        Array.from({ length: PAGE_SIZE }, (_, i) => ({
          id: page * PAGE_SIZE + i,
          content: `Block #${page * PAGE_SIZE + i + 1}`,
        }))
      );
    }, 1000);
  });
}
export default function InfiniteScrollFeed() {
  const navigate = useNavigate();
  const gotoPost = (postId: number) => navigate(`/board/details/${postId}`);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [page, setPage] = useState(0);
  const [dialogPost, setDialogPost] = useState(false);
  const [loading, setLoading] = useState(false);
  const loader = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchFakeData(page).then((newData) => {
      setBlocks((prev) => [...prev, ...newData]);
      setLoading(false);
    });
  }, [page]);

  useEffect(() => {
    if (!loader.current) return;

    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    observerRef.current.observe(loader.current);

    return () => observerRef.current?.disconnect();
  }, [loading]);

  return (
    <div>
      <ToolsBar openDialogPost={() => setDialogPost(true)} />
      <ScrollArea className="rounded-md border h-screen">
        {blocks.map((block) => (
          <Card key={block.id} onClick={() => gotoPost(block.id)}>
            <Post {...block} />
          </Card>
        ))}
        <div ref={loader} className="text-center p-4">
          {loading ? "Loading more..." : "Scroll down to load more"}
        </div>
      </ScrollArea>
      <DialogPostCreateDel />
      <DialogPostCreateEdit status={dialogPost} setStatus={setDialogPost} />
    </div>
  );
}
