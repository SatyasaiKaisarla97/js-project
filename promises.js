function createPost(post){
    return new Promise((reslove, reject) =>{
        setTimeout(() => {
            console.log(post)
            reslove(post)
        }, 1000)
    }


    );
}

function updateLastUserActivity(){
    return new Promise((reslove, reject) =>{
        setTimeout(() => {
        const lastActivityTime = new Date();
        console.log(lastActivityTime)
        reslove(lastActivityTime)
        }, 1000);
});
}

function deletePost(post){
    return new Promise((reslove, reject) =>{
        setTimeout(() => {
            console.log(post)
            reslove()
    }, 1000
    )
})
}
const userPost = {};

createPost(userPost)
  .then(() => updateLastUserActivity())
  .then((lastActivityTime) => {
    console.log(lastActivityTime);
  })
  .then(() => {
    console.log(userPost);
  })
  .catch((error) => {
    console.log( error);
  });