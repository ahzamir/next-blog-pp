import Layout from "@/components/Layout";
import PostComponent from "@/components/PostComponent";

export default async function PostPage({ params }: { params: { id: string } }) {
  return (
    <Layout>
      <PostComponent params={params} />
    </Layout>
  );
}