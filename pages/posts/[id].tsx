import { getAllPostIds, getPostData } from '@/lib/posts';
import { Fragment } from 'react';

export default function Post({ postData }) {
  return (
    <Fragment>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Fragment>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
