 <form>
      Select a picture <input type="file" id="user_picture" onchange="update_image()">
      <p>
        meme text: <input type="text" id="user_text" oninput="update_text()" maxlength="70">
      <p>
    </form>
      <div class="container">
        <div id="meme_picture">
          <img src="" width="500px" height="500px">
        </div>
        <div class="align">
          <div id="meme_text">&nbsp;</div>
        </div>
      </div>
    <footer>
      <p>Made by <a href="https://amandaernar.github.io/blog">Amanda Ernar</a></p>
    </footer>
    <script>
      function update_image(){
        var img = document.querySelector('img');
        var file = document.querySelector('input[type=file]').files[0];
        img.src =  window.URL.createObjectURL(file);
      }
      function update_text(){
        var user_text = document.getElementById("user_text");
        var meme_text = document.getElementById("meme_text");
        meme_text.innerHTML = user_text.value;
      }
</script>

