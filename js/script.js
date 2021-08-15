$(document).ready(function () {
  $(
    $(".hamburger").on("click", function () {
      $(".hamburger").closest(".wrapper").toggleClass("click-side");
    })
  );

  if ($(".page").length) {
    $(document).on("scroll", function () {
      $(".page").each(function () {
        var self = $(this);
        if (
          self.offset().top < $(document).scrollTop() &&
          $(document).scrollTop() < self.offset().top + self.outerHeight()
        ) {
          var targetClass = "." + self.attr("id") + "-nav";
          $(".resume-nav li a").removeClass("active");
          $(targetClass).addClass("active");
        }
      });
      if (
        $(document).scrollTop() > $(".page-3").offset().top - 10 &&
        $(document).scrollTop() < $(".page-3").offset().top + 5
      ) {
        $(function () {
          $(".circlechart").circlechart();
        });
      }
    });
    $(function () {
      $(".circlechart").circlechart();
    });
    if ($(document).scrollTop() === 0) {
      $(".resume-nav a.page-1-nav").addClass("active");
    }
    $(".resume-nav li a").on("click", function () {
      $(".resume-nav li a").removeClass("active");
      $(this).addClass("active");
    });
  }

  if ($(".gallery-img").length) {
    var images = $("img");
    $("img").on("click", function () {
      let output =
        '<div class="slideshow"><div class="current-img"><div class="text-box text-center"><h1>' +
        $(this).attr("alt-title") +
        "</h1><p>" +
        $(this).attr("alt-description") +
        "</p><a href='" +
        $(this).attr("alt-link") +
        "'><i class='fa fa-external-link-alt pr-2'></i>" +
        $(this).attr("alt-link") +
        "</a></div><div class='img-box'><img class='image' src='" +
        $(this).attr("src") +
        "'></div></div><button class='btn btn-x'>X</button></div>";
      $("body").append(output);
      $(".btn").click(function () {
        $(".slideshow").remove();
      });
    });
    $(".gallery").showMoreItems({
      startNum: 6,
      afterNum: 3,
      original: true,
    });
  }
  if ($(".blog").length) {
    $(".blog-area").showMoreItems({
      startNum: 3,
      afterNum: 2,
    });
  }
});
