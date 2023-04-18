const description = {
  desktop: {
    background: {
      backgroundImage: `url(/images/home/description.svg)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      minHeight: 800,
    },

    text: {
      heading: {
        mt: "92px",
        fontFamily: "Gotham Pro Bold",
        color: "#30303E",
        fontSize: "36px",
      },
      underline: {
        textDecoration: "underline #08E6E7",
        textDecorationThickness: "3px",
        textUnderlineOffset: "20px",
      },
      body: {
        fontFamily: "Gotham Pro Medium",
        fontSize: "24px",
        maxWidth: "630px",
      },
    },
    button: {
      width: "406px",
      height: "115px",
      borderRadius: 0,
      my: "50px",
      text: {
        fontFamily: "Gotham Pro Medium",
        fontSize: "32px",
      },
    },
  },

  mobile: {
    background: {
      backgroundImage: `url(/images/home/description_mobile.svg)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      minHeight: 480,
    },

    text: {
      heading: {
        mt: "31px",
        fontFamily: "Gotham Pro Bold",
        color: "#30303E",
        fontSize: "24px",
      },
      underline: {
        textDecoration: "underline #08E6E7",
        textDecorationThickness: "3px",
        textUnderlineOffset: "10px",
      },
      body: {
        fontFamily: "Gotham Pro Medium",
        fontSize: "16px",
        maxWidth: "267px",
      },
    },
    button: {
      width: "200px",
      height: "60px",
      my: "25px",
      borderRadius: 0,
      text: {
        fontFamily: "Gotham Pro Medium",
        fontSize: "16px",
      },
    },
  },
};

export default description;
