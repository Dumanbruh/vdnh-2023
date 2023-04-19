const cover = {
  desktop: {
    background: {
      backgroundImage: `url(/images/home/cover.svg)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      minHeight: 800,
    },

    text: {
      heading: {
        fontSize: "96px",
        letterSpacing: "1px",
        maxWidth: "392px",
        fontFamily: "Mossport",
        color: "#31313E",
        lineHeight: "96px",
      },
      crumb: {
        fontSize: "56px",
        fontFamily: "Mossport",
        letterSpacing: "1px",
        color: "#000000",
        lineHeight: "72px",
        textTransform: "uppercase",
      },
    },

    breadcrumb: {
      separator: {
        backgroundColor: "secondary.main",
        height: "40px",
        width: "10px",
      },
      box: {
        marginTop: "174px",
        maxWidth: "600px",
      },
    },
  },

  mobile: {
    background: {
      backgroundImage: `url(/images/home/cover_mobile.svg)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      minHeight: 480,
    },

    text: {
      heading: {
        fontSize: "48px",
        letterSpacing: "1px",
        maxWidth: "150px",
        fontFamily: "Mossport",
        color: "#31313E",
        lineHeight: "48px",
      },
      crumb: {
        fontSize: "28px",
        fontFamily: "Mossport",
        letterSpacing: "1px",
        color: "#31313E",
        lineHeight: "28px",
        textTransform: "uppercase",
      },
    },

    breadcrumb: {
      separator: {
        backgroundColor: "secondary.main",
        height: "20px",
        width: "5px",
      },
      box: {
        marginTop: "120px",
        maxWidth: "230px",
      },
    },
  },
};

export default cover;
