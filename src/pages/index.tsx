import { PostCard, Widget, Categories, FeaturedPosts} from "@/Components"
import { getPosts } from '../../Services';

export default function Home({posts}) {
  return (
    <div className="container mx-auto px-10 mb-8">
        <FeaturedPosts />
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
          <div className='col-span-1 lg:col-span-8'>
            {posts.map( (post) => (

              <PostCard post={post.node} key={post?.node?.title} />
            ))}
          </div>

          <div className='col-span-1 lg:col-span-4'>
              <div className='lg:sticky relative top-24'>
                <Widget />
                <Categories />
              </div>
          </div>
          
        </div>
        
    </div>
  )
}

export async function getStaticProps() {
  const posts = ( await getPosts() ) || [];
  return {
    props: { posts }
  }
}
