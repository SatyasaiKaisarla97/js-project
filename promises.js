async function createPost(post){
    return new Promise((reslove, reject) =>{
        setTimeout(() => {
            console.log(post)
            reslove(post)
        }, 1000)
    }


    );
}

async function updateLastUserActivity(){
    return new Promise((reslove, reject) =>{
        setTimeout(() => {
        const lastActivityTime = new Date();
        console.log(lastActivityTime)
        reslove(lastActivityTime)
        }, 1000);
});
}

async function deletePost(post){
    return new Promise((reslove, reject) =>{
        setTimeout(() => {
            console.log(post)
            reslove()
    }, 1000
    )
})
}

async function main(){
try{
const userPost = {};

const  createdPost = await createPost(userPost);
const lastActivityTime = await updateLastUserActivity();

console.log(lastActivityTime)
await deletePost(userPost)
console.log('post deleted')
} catch(error){
    console.log(error)
}
}
main();
