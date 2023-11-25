document.addEventListener("DOMContentLoaded", () => {
    const firsticon = document.querySelectorAll(".rotateicon");
    const Accordchild1 = document.querySelectorAll(".Accordchild1");
    const progress = document.querySelector(".progress");
  const addedvalue = document.querySelector(".addedvalue");
    
    const itemState = new Array(firsticon.length).fill(false);
  
    firsticon.forEach((item, index) => {
      item.addEventListener("click", () => {
        const increase = 20;
  
        itemState[index] = !itemState[index];
  
        const totalWidth = itemState.reduce((acc, isAdded, i) => {
          return acc + (isAdded ? increase : 0);
        }, 0);
  
        
        addedvalue.innerHTML = `${totalWidth/increase}/${firsticon.length}`;
  
        // Apply the inline style to the progress bar
        progress.style.width = `${totalWidth}%`;
  
      });
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const Accordchild1 = document.querySelectorAll(".Accordchild1");
    const accordionItems = document.querySelectorAll(".drawer .spanindex");
    const accordionContent = document.querySelectorAll(".Accordchild2");
   
  
    accordionItems.forEach((item) => {
      console.log(item);
      
      item.addEventListener("click", () => {
        console.log("all item ");
      });
    });// if (item === this.parentNode) {
          //   console.log(item);
          //   item.classList.add("active");
          // } else {
          //   item.classList.remove("active");
          // }
     
  
        // accordionContent.forEach((content) => {
      
        //   // console.log(content.classList.contains("activeaccord"));
        //   if (content === this.parentNode.nextElementSibling) {
        //     content.classList.add("activeaccord");
        //   } else {
        //     content.classList.remove("activeaccord");
        //   }
        // });
        // accordionItems.forEach((otherItem) => {
        //   if (otherItem !== this && otherItem.classList.contains("active")) {
        //     otherItem.classList.remove("active");
        //   }
        // });
  
    // });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const trigger = document.getElementById("drawer");
    const contentWrapper = document.querySelector("#genaccord");
  
    trigger.addEventListener("change", function () {
      contentWrapper.style.maxHeight = this.checked ? "fit-content" : "128px";
    });
  });
  
  let AllAcord = document.querySelector(".AllAcord");
  const Data = [
    {
      id: 1,
      span: "Customize your online store",
      paragraph:
        "Choose a theme and add your logo, colors, and images to reflect your brand. ",
      link: "https://help.shopify.com/en/manual/online-store/themes/customizing-themes",
      images: "https://crushingit.tech/hackathon-assets/customise-store.png",
      button: "Customize theme",
    },
    {
      id: 2,
      span: "Add your first product",
      paragraph:
        "Choose a theme and add your logo, colors, and images to reflect your brand.",
      link: "https://help.shopify.com/en/manual/products/add-update-products",
      images: "https://crushingit.tech/hackathon-assets/product.png",
      button: "Add product",
      childtext: "import product",
    },
    {
      id: 3,
      span: "Add a custom domain",
      paragraph:
        "Your current domain is 222219.myshopify.com but you can add a custom domain to help customers find your online store. ",
      link: "https://help.shopify.com/en/manual/domains",
      images: "https://crushingit.tech/hackathon-assets/website.png",
      button: "Add domain",
    },
    {
      id: 4,
      span: "Name your store",
      paragraph:
        "Your temporary store name is currently Davii collections. The store name appears in your admin and your online store.",
      link: "https://help.shopify.com/en/manual/intro-to-shopify/initial-setup/setup-business-settings#set-or-change-your-online-store-name-and-legal-business-name",
      images: "https://crushingit.tech/hackathon-assets/name-store.png",
      button: "Name store",
    },
    {
      id: 5,
      span: "Set up a payment provider",
      paragraph:
        "Choose a payment provider to start accepting payments. You’ll need to create an account with the payment provider and set it up with your Shopify store. ",
      link: "https://help.shopify.com/en/manual/payments",
      images: "https://crushingit.tech/hackathon-assets/payment.png",
      button: "set up payment",
    },
  ];
  
  const accordionHTML = Data.map(
    (item) => `
    <div class="drawer"> dummy text </div>
    <div class="Accordchild2" >
    <div class="vericon rotateicon">
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" stroke="#8A8A8A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 6" />
  
    </svg>
  </div>
      <div class="sec1product">
        <div class="subicon">
        
          <span >${item.span}</span>
     
          <div class="subText">
            <p class="paragraph">${item.paragraph}</p>
            <a href="${item.link}">Learn More</a>
            <button>${item.button}</button>
          </div>
        </div>
      </div>
      <img src="${item.images}" alt="" class="image">
    </div>
  `
  ).join("");
  
  // Append the generated HTML to the accordion container
  AllAcord.innerHTML = accordionHTML;
  