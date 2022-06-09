import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

type Props = {
  id: string
  title: string
  date: string
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params} : {params: {id: string}}) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData
    }
  }
}


export default function Post({postData}: {postData: Props}) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}
