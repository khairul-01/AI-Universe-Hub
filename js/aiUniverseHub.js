const aiHubHandler = async () => {
   const response = await fetch('https://openapi.programming-hero.com/api/ai/tools');
   const resource = await response.json();
   console.log(resource);
   const data = resource.data.tools;
   aiHubDisplay(data);
}
const aiHubDisplay = data => {
   console.log(data);
   
   const cardContainer = document.getElementById('card-container');

   data.forEach(tool => {
      // console.log(tool.name);
      const itemFeature = tool.features;
      let item = '';
      for(let i = 0; i<itemFeature.length;i++){
         item += `${i+1}. ${itemFeature[i]} <br>
         `
      }
      const aiCard = document.createElement('div');
      aiCard.classList = `card w-full bg-base-200 shadow-xl`;
      aiCard.innerHTML = `
      <figure class="px-10 pt-10">
         <img src="${tool?.image}" alt="${tool.name}" class="rounded-xl" />
      </figure>
      <div class="card-body">
         <h2 class="card-title">Features</h2>
         <p>${item}</p>
         <hr>
         <div class="flex justify-between items-center">
         <div>
            <h2 class="card-title">${tool.name}</h2>
            <p>${tool.published_in}</p>
         </div>
         <div class="card-actions">
            <button class="btn btn-sm btn-outline btn-primary"><i class="fa-solid fa-arrow-right"></i></button>
         </div>
         </div>
      </div>
      `;
      cardContainer.appendChild(aiCard);
   });

}