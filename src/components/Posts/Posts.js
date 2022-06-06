import styles from './Posts.module.css';

function Posts({ posts }) {
  return (
    <div className="posts-list">
      {posts.map((post) => (
        <div key={post.id}>
          <h3 className={styles.postHeader}>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
