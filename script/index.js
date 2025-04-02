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
const Loadcategoryvideos = (id) => {

  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    //3 send data to display 
    .then((data) => {
     const clickedButton = document.getElementById(`btn-${id}`);
      // clickedButton.classList.add("active");

      console.log(clickedButton);
      displayvideos(data.category);
    });

};
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
     <button id="${cat.category_id}" onclick="Loadcategoryvideos(${cat.category_id})"   class="btn btn-sm hover:bg-red-600 hover:text-white">${cat.category}</button>`;
    //Append the Element 
    categoriesContainer.append(categoriesDiv);

  }

}
const displayvideos = (videos) => {
  const videocontainer = document.getElementById("video-container");
  videocontainer.innerHTML = "";
  if (videos.length == 0) {
    videocontainer.innerHTML = `  <div class="col-span-full flex flex-col text-center justify-center items-center py-20">
        <img class="w-[120px]" src=".//assets/Icon.png" alt="">
        <h2 class="text-2xl font-bold text-center">
            Oops!! Sorry, There is no content here
        </h2>
      </div>`;


    return;
  }

  videos.forEach((video) => {
    // console.log(video);\
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
             <div class="card bg-base-100  shadow-sm">
            <figure class="relative">
              <img class="w-full h-[150px] object-cover"
                src=${video.thumbnail} 
                alt="Shoes" />
                <span class="absolute bottom-2 right-2 text-white bg-black text-sm rounded">3hrs 56 min ago</span>
            </figure>
           
            <div class="flex gap-3 px-0 py-5">
             <div class="profile">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                      <img  class="" src=${video.authors[0].profile_picture} />
                    </div>
                  </div>
             </div>
             <div class="intro">
                <h2 class="text-sm font-semibold">Midnight Serenade</h2>
                <p class="text-sm text-gray-600 flex gap-1"> ${video.authors[0].profile_name} <img class="size-5" src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000" alt=""></p>
                <p class="text-sm text-gray-600 ">${video.others.views}views</p>
             </div>
              </div>
            </div>
          </div>
          `
    // append the element
    videocontainer.append(videoCard)

  });
};





Loadcategories();
