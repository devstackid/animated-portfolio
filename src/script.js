const container = document.querySelector(".loading-container");
      const main = document.querySelector(".main");
      const scene = document.querySelector(".scene");
      const loadingContainer = document.querySelector(".loading-container");
      var percent = 0;
      var loop = setInterval(() => {
        if (percent != 100) {
          percent++;
          // loadingText.innerHTML = `${percent}%`;
          main.style.display = "none";
        } else {
          clearInterval(loop);
          loadingContainer.style.display = "none";
          main.style.display = "inline";
          // loadingText.innerHTML = `Thank you for waiting!`;
          // setTimeout(() => {
          //   container.style.display = "none";
          // }, 900);

          // setTimeout(() => {
          //   main.style.display = "inline";
          // }, 2000);

        }
      }, 50);

