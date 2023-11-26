document.addEventListener("DOMContentLoaded", () => {
  const firsticon = document.querySelectorAll(".rotateicon");
  const Accordchild1 = document.querySelectorAll(".Accordchild1");
  const progress = document.querySelector(".progress");
  console.log(firsticon);
  const addedvalue = document.querySelector(".addedvalue");

  const itemState = new Array(firsticon.length).fill(false);

  firsticon.forEach((item, index) => {
    item.addEventListener("click", () => {
      const increase = 20;

      itemState[index] = !itemState[index];

      const totalWidth = itemState.reduce((acc, isAdded, i) => {
        return acc + (isAdded ? increase : 0);
      }, 0);

      addedvalue.innerHTML = `${totalWidth / increase}/${firsticon.length}`;

      // Apply the inline style to the progress bar
      progress.style.width = `${totalWidth}%`;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".spanindex");
  const Accordchild1 = document.querySelectorAll(".Accordchild1");
  const accordionContent = document.querySelectorAll(".Accordchild2");
  accordionItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      // Remove 'activeaccord' class from all items
      accordionContent.forEach((content) => {
        content.classList.remove("activeaccord");
      });

      // Add 'activeaccord' class to the clicked item
      accordionContent[index].classList.add("activeaccord");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const trigger = document.getElementById("drawer");
  const contentWrapper = document.querySelector("#genaccord");

  trigger.addEventListener("change", function () {
    contentWrapper.style.maxHeight = this.checked ? "fit-content" : "128px";
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const rotateicon1 = document.querySelectorAll(".rotateicon1");
//   const rotateicon2 = document.querySelectorAll(".rotateicon2");

//   rotateicon1.forEach((item, index) => {
//     let timeoutId;

//     item.addEventListener('mouseenter', () => {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => {
//         rotateicon2[index].style.display = 'block';
//         item.style.display = 'none';
//       }, 200); // Adjust the delay (in milliseconds) as needed
//     });

//     item.addEventListener('mouseleave', () => {
//       clearTimeout(timeoutId);
//       timeoutId = setTimeout(() => {
//         rotateicon2[index].style.display = 'none';
//         item.style.display = 'block';
//       }, 200); // Adjust the delay (in milliseconds) as needed
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const accordions = document.querySelectorAll(".Accordchild2");

//   accordions.forEach((accordion) => {
//     const rotateicon1 = accordion.querySelector(".rotateicon1");
//     const rotateicon2 = accordion.querySelector(".rotateicon2");

//     rotateicon1.addEventListener("mouseenter", () => {
//       rotateicon2.style.display = 'block';
//       rotateicon1.style.display = 'none';
//     });

//     accordion.addEventListener("mouseleave", () => {
//       rotateicon2.style.display = 'none';
//       rotateicon1.style.display = 'block';
//     });
//   });

// });

document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".Accordchild2");

  accordions.forEach((accordion) => {
    const rotateicon1 = accordion.querySelector(".rotateicon1");
    const rotateicon2 = accordion.querySelector(".rotateicon2");

    rotateicon1.addEventListener("mouseenter", () => {
      rotateicon2.style.display = "block";
      rotateicon1.style.display = "none";
    });

    rotateicon2.addEventListener("mouseleave", () => {
      rotateicon2.style.display = "none";
      rotateicon1.style.display = "block";
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {

// });

// function HandleReset() {
//   const rotateicon1 = document.querySelector(".rotateicon1");
//   const rotateicon2 = document.querySelector(".rotateicon2");
//   document.getElementById("div1").classList.add("hidden");
//   document.getElementById("div2").classList.add("hidden");
//   document.getElementById("div3").classList.add("hidden");
//   document.getElementById("div4").classList.add("hidden");
//   document.getElementById("div5").classList.add("hidden");
//   document.getElementById("div6").classList.add("hidden");
//   rotateicon2.style.display = "none";
//   rotateicon1.style.display = "block";
// }

// function startProgress() {
//   // Hide div1
//   document.getElementById('div1').classList.add('hidden');

//   // Automatically show div 2 after a delay
//   setTimeout(() => {
//     document.getElementById('div2').classList.remove('hidden');

//     // Automatically hide div 2 after another delay
//     setTimeout(() => {
//       document.getElementById('div2').classList.add('hidden');

//       // Automatically show div 3 after another delay
//       setTimeout(() => {
//         document.getElementById('div3').classList.remove('hidden');
//         setTimeout(() => {
//           document.getElementById('div3').classList.add('hidden');
//           setTimeout(() => {
//             document.getElementById('div4').classList.remove('hidden');
//             setTimeout(() => {
//               document.getElementById('div4').classList.add('hidden');
//               setTimeout(() => {
//                 document.getElementById('div5').classList.remove('hidden');
//               },0)
//             },80)
//           },0)
//         },80)
//       }, 80); // Adjust the delay as needed
//     }, 80); // Adjust the delay as needed
//   }, 0); // Adjust the delay as needed
// }

document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".rotateicon");
  accordions.forEach((accordion, index) => {
    const startprogress = accordion.querySelector(".startprogress");

    startprogress.addEventListener("click", function (abc) {
      console.log(index, "index");
      console.log(accordion.children);

      
      // console.log("progress", accordion);
      accordion.children[0].classList.add("hidden");
      accordion.children[7].style.display = "none";
      accordion.children[6].style.display = "none";
      // Automatically show div 2 after a delay
      setTimeout(() => {
        accordion.children[1].classList.remove("hidden");

        accordion.children[7].style.display = "none";
        accordion.children[6].style.display = "none";
        // Automatically hide div 2 after another delay
        setTimeout(() => {
          accordion.children[1].classList.add("hidden");

          accordion.children[7].style.display = "none";
          accordion.children[6].style.display = "none";
          // Automatically show div 3 after another delay
          setTimeout(() => {
            accordion.children[2].classList.remove("hidden");

            accordion.children[7].style.display = "none";
            accordion.children[6].style.display = "none";
            setTimeout(() => {
              accordion.children[2].classList.add("hidden");

              accordion.children[7].style.display = "none";
              accordion.children[6].style.display = "none";
              setTimeout(() => {
                accordion.children[3].classList.remove("hidden");

                accordion.children[7].style.display = "none";
                accordion.children[6].style.display = "none";
                setTimeout(() => {
                  accordion.children[3].classList.add("hidden");

                  accordion.children[7].style.display = "none";
                  accordion.children[6].style.display = "none";
                  setTimeout(() => {
                    accordion.children[4].classList.remove("hidden");

                    accordion.children[7].style.display = "none";
                    accordion.children[6].style.display = "none";
                    setTimeout(() => {
                      accordion.children[4].classList.add("hidden");

                      accordion.children[7].style.display = "none";
                      accordion.children[6].style.display = "none";
                      setTimeout(() => {
                        document;
                        accordion.children[5].classList.remove("hidden");

                        accordion.children[7].style.display = "none";
                        accordion.children[6].style.display = "none";
                      }, 0);
                    }, 60);
                  }, 0);
                }, 60);
              }, 0);
            }, 60);
          }, 60); // Adjust the delay as needed
        }, 60); // Adjust the delay as needed
      }, 0); // Adjust the delay as needed
    });
  });
});
function HandleReset() {
  const accordions = document.querySelectorAll(".rotateicon");

  accordions.forEach((accordion) => {
    

  })
}

document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".rotateicon");
  accordions.forEach((accordion) => {
    const reset = accordion.querySelector(".reset");
    reset.addEventListener("click", function () {
      accordion.children[0].classList.add("hidden");
    accordion.children[1].classList.add("hidden");
    accordion.children[2].classList.add("hidden");
    accordion.children[3].classList.add("hidden");
    accordion.children[4].classList.add("hidden");
    accordion.children[5].classList.add("hidden");

    accordion.children[7].style.display = "none";
    accordion.children[6].style.display = "block";
    });
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
  <div class="Accordchild2" >
  <div class="vericon rotateicon">
  <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  id="div1"
  class="hidden"
>
  <circle
    cx="12"
    cy="12"
    r="10"
    fill="#D9D9D9"
    stroke="#8A8A8A"
    stroke-width="2.08333"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>

<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  id="div2"
  class="hidden"
>
  <path
    d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2"
    stroke="#1C181D"
    stroke-width="2.08333"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>

<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  id="div3"
  class="hidden"
>
  <path
    d="M11.9996 2C13.9774 2 15.9108 2.58649 17.5553 3.6853C19.1998 4.78412 20.4816 6.3459 21.2384 8.17316C21.9953 10.0004 22.1933 12.0111 21.8075 13.9509C21.4216 15.8907 20.4692 17.6725 19.0707 19.0711C17.6722 20.4696 15.8903 21.422 13.9505 21.8079C12.0107 22.1937 10.0001 21.9957 8.1728 21.2388C6.34554 20.4819 4.78375 19.2002 3.68494 17.5557C2.58612 15.9112 1.99963 13.9778 1.99963 12"
    stroke="#1C181D"
    stroke-width="2.08333"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>

<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  id="div4"
  class="hidden"
>
  <ellipse
    opacity="0.6"
    cx="7.00008"
    cy="7.00004"
    rx="7.00008"
    ry="7.00004"
    transform="matrix(0.526082 -0.850434 0.850437 0.526077 2.36414 14.2701)"
    fill="#1C181D"
    stroke="#1C181D"
    stroke-width="1.45835"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <g opacity="0.6">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.7757 7.89535C12.0109 7.83993 12.2465 7.98566 12.3019 8.22085L13.5318 13.4402C13.5872 13.6754 13.4415 13.9109 13.2063 13.9663L10.5966 14.5813C10.3614 14.6367 10.1258 14.491 10.0704 14.2558C10.015 14.0206 10.1607 13.785 10.3959 13.7296L12.5798 13.215L11.4502 8.42154C11.3948 8.18635 11.5406 7.95077 11.7757 7.89535Z"
      fill="white"
    />
  </g>
</svg>

<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  id="div5"
  class="hidden"
>
  <circle
    cx="11.9996"
    cy="12"
    r="10"
    fill="#1C181D"
    stroke="#1C181D"
    stroke-width="2.08333"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M16.8162 8.64149C17.0603 8.88557 17.0603 9.2813 16.8162 9.52538L11.3995 14.942C11.1555 15.1861 10.7597 15.1861 10.5157 14.942L7.80733 12.2337C7.56325 11.9896 7.56325 11.5939 7.80733 11.3498C8.0514 11.1057 8.44713 11.1057 8.69121 11.3498L10.9576 13.6162L15.9323 8.64149C16.1764 8.39742 16.5721 8.39742 16.8162 8.64149Z"
    fill="white"
  />
</svg>

<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  id="div6"
  class="hidden reset"

>
  <circle
    cx="11.9996"
    cy="12"
    r="10"
    fill="#1C181D"
    stroke="#1C181D"
    stroke-width="2.08333"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M16.8163 8.64149C17.0604 8.88557 17.0604 9.2813 16.8163 9.52538L11.3997 14.942C11.1556 15.1861 10.7599 15.1861 10.5158 14.942L7.80745 12.2337C7.56337 11.9896 7.56337 11.5939 7.80745 11.3498C8.05153 11.1057 8.44725 11.1057 8.69133 11.3498L10.9577 13.6162L15.9324 8.64149C16.1765 8.39742 16.5723 8.39742 16.8163 8.64149Z"
    fill="white"
  />
</svg>

<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="rotateicon1"
>
  <circle
    cx="12"
    cy="12"
    r="10"
    stroke="#8A8A8A"
    stroke-width="2.08333"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-dasharray="5 5"
  />
</svg>

<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="rotateicon2 startprogress"

>
  <circle
    cx="12"
    cy="12"
    r="10"
    stroke="#8A8A8A"
    stroke-width="2.08333"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>


</div>
    <div class="sec1product">
      <div class="subicon">
      
        <span class="spanindex">${item.span}</span>
   
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
