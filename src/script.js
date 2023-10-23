const container = document.querySelector(".loading-container");
      const main = document.querySelector(".main");
      const runningBox = document.querySelector(".running-box");
      const loadingText = document.querySelector(".loading-text");
      var percent = 0;
      var loop = setInterval(() => {
        if (percent != 100) {
          percent++;
          loadingText.innerHTML = `${percent}%`;
          main.style.display = "none";
          runningBox.style.display = "none";
        } else {
          clearInterval(loop);
          loadingText.innerHTML = `Thank you for waiting!`;
          setTimeout(() => {
            container.style.display = "none";
          }, 900);
          setTimeout(() => {
            runningBox.style.display = "block";
          }, 700);

          setTimeout(() => {
            main.style.display = "inline"; // Tampilkan elemen main setelah 3 detik
          }, 2000);

          setTimeout(() => {
            runningBox.style.display = "none";
          }, 3000);
        }
      }, 20);
      // total waktu untuk animasi diatas adalah 5 detik atau 5s

      // Part 2 - Mengubah warna background pada elemen changeBgColor
      // deklarasi variable warna
      const changeBgColor = document.querySelector(".changeBgColor");
      const colors = [
        "rgb(173, 216, 230)",
        "rgb(255, 165, 0)",
        "rgb(255, 192, 203)",
        "rgb(0, 128, 128)",
      ];
      let index = 0;

      function changeBackgroundColor() {
        changeBgColor.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length; // Melakukan looping ke warna pertama setelah mencapai warna terakhir
      }

      setTimeout(() => {
        setInterval(changeBackgroundColor, 2000);
      }, 2000);

      // animasi bentuk
      const shapes = document.querySelectorAll(".shape");
      let currentIndex = 0;

      function showNextShape() {
        shapes[currentIndex].style.display = "none";
        currentIndex = (currentIndex + 1) % shapes.length;
        shapes[currentIndex].style.display = "block";
      }

      setInterval(showNextShape, 2000); // Tampilkan elemen bergantian setiap