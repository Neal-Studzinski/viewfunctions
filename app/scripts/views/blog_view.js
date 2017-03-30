export default function Blog_View() {
  const url = "http://tiny-za-server.herokuapp.com/collections/";
  const db = "viewfunctions";


  function BlogPost(title,body) {  // Constructor for blog post
      this.title = title;
      this.body = body;
}

  function post(data,id) {
        var settings = { // settings for posting to tiny-za-server
            type: 'POST',
            contentType: 'application/json',
            url: url+db,
            data: JSON.stringify(data)
        }
        $.ajax(settings).then(function(data,status,xhr) {
            store.fire("UPDATE_POSTS")
          })

      }

    this.blogViewContent =
      (`<section class="formView">
          <form class="blogForm">
            <input class="title" type ="text" name="" value="" placeholder="Enter Blog Title">
            <textarea class="body" name="body" rows="6" cols="50" placeholder="Write a blog"></textarea>
            <button class="submit" type="submit" name="button">Submit Post</button>
          </form>
        </section>`);

    this.submitBtnClickHandler = function (e) {
      e.preventDefault();
      let title = $('#title').val();
      let body = $('#body').val();
      let blogPost = new BlogPost(title,body);
    }


}
