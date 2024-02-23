import React from "react";
// import navbar from "./component/navbar.jsx";

//include images into your bundle

//create your first component
const Jumbotron = () => {
	return (
	<div className="row">
<div className="col-1"></div>
<div className="col">
<div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4"/>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Call to action</a>
  </p>
</div>
</div>
<div className="col-1"></div>

    </div>



	);
};

export default Home;
