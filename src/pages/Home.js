import React from 'react'

const Home = () => {
  return (
    <div style={{
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor: (t) =>
        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: "center",
      // backgroundAttachment: "fixed",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
          <h1 style={{
            fontFamily: "fantasy",
            fontSize: "5rem",
            color: "white",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
            marginBottom: "50px",
            marginLeft: "50px",
            marginRight: "50px",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: "50px",
            padding: "10px",
            border: "1px solid white",
            boxShadow: "0px 0px 10px black",
            letterSpacing: "5px"
          }}
          >Hello! Welcome to Anthony Harold's Quiz App</h1>
      </div>
  )
}

export default Home