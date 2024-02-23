import React from "react";

//create your first component
export const Jumbotron = () => {
	return (
	<div className="row">
<div className="col-2"></div>
<div className="col-8">
<div class="jumbotron">
  <h1 class="display-4">A Warm Welcome!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra 
  attention to featured content or information.
  It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Call to action</a>
  </p>
</div>
</div>
<div className="col-2"></div>

    </div>



	);
};
