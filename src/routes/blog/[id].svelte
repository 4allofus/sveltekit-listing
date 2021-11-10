<script context="module">
    export const load = async ({ page, fetch }) =>{
        const id = page.params.id;

        const myPath = "https://jsonplaceholder.typicode.com/posts/" + id;
        //console.log(myPath);

      const res = await fetch(myPath);
      const post = await res.json();
      return{
        props: {
          post,
        },
      };
    };
  
  </script>

  <script>
         export let post;
  </script>

<div class="paper container-md"> 
  <h1>{post.title}</h1>
  <p>{post.body}</p>
  {JSON.stringify(post)}
</div>