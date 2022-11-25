window.addEventListener("load", (event) => {
    getProjects(3, "index");
  });

getProjects = (num, where) =>{
    let html = '';
    for (let i = 1; i <= num; i++) {
      fetch('https://jsonplaceholder.typicode.com/posts/' + i)
        .then(response => response.json())
        .then(json => {
            let title = json.title.substring(0,10);
            let text= json.body.substring(0,20)
            //console.log(title+" "+text);
            html += `            <div
            role="list"
            class="section-3-cards-card w-full max-w-full md:max-w-[340px] md:h-[444px] bg-white flex flex-col"
          >
          <div class="section-3-cards-card-img">
            <img
              class="w-full h-60 object-cover box-border "
              src="media/projects-section/${i}.jpg"
              alt="simplify"
            />
            </div>
            <h1 class="section-3-cards-card-header text-2xl font-medium px-[30px] pt-[30px] pb-5">
            ${title}
            </h1>
            <p class="section-3-cards-card-p text-[17px] px-[30px] pb-2">
            ${text}
            </p>
            <a class="p-[30px]" href="simplify.html">Learn More</a>
            </div>`
            if (where === 'index') {
                document.querySelector('.section-3-cards').innerHTML = html;
            }
            if (where === 'side') {
                document.querySelector('.section-2-cards').innerHTML = html;
            }   
        })
    }
}
