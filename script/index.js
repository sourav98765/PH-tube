function Loadcategories() {
    //fetch data 
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        //2-convert promise to json
        .then((res) => res.json())
        //3 send data to display 
        .then((data) => displayCategories(data.categories));

}
function loadVideo() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((response) => response.json())
        .then((data) => displayvideos(data.videos));
}
// {
//     "category_id": "1001",
//     "video_id": "aaad",
//     "thumbnail": "https://i.ibb.co/f9FBQwz/smells.jpg",
//     "title": "Smells Like Teen Spirit",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/k4tkc42/oliviar-harris.jpg",
//             "profile_name": "Oliver Harris",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "5.4K",
//         "posted_date": "1672656000"
//     },
//     "description": "'Smells Like Teen Spirit' by Oliver Harris captures the raw energy and rebellious spirit of youth. With over 5.4K views, this track brings a grunge rock vibe, featuring powerful guitar riffs and compelling vocals. Oliver's verified profile guarantees a quality musical journey that resonates with fans of dynamic, high-energy performances."
// }
function displayCategories(categories) {
    //get the container 
    const categoriesContainer = document.getElementById("category-contain");
    // loop operation on Array of object
    for (let cat of categories) {
        console.log(cat);
        // create Element 
        const categoriesDiv = document.createElement("div");
        categoriesDiv.innerHTML = `
     <button class="btn btn-sm hover:bg-red-600 hover:text-white">${cat.category}</button>`;
        //Append the Element 
        categoriesContainer.append(categoriesDiv);

    }

}
const displayvideos = (videos) => {
    const videocontainer = document.getElementById("video-container");

    videos.forEach((video) => {
        // console.log(video);\
        const videoCard = document.createElement("div");
        videoCard.innerHTML = `
          <div class="card bg-base-100  shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
          `
        // append the element
        videocontainer.append(videoCard)

    });
};





Loadcategories();
loadVideo();