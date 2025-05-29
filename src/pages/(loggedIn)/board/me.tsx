import Posts from "@/components/Posts";

export default function InfiniteScrollFeed() {
  return (
    <div>
      <Posts onlyMe={true} />
    </div>
  );
}
