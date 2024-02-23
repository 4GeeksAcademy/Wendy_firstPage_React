import React from "react";


//include images into your bundle

//create your first component
const Navbar = () => {
	return (

<div className="row  bg-dark">
<div className="col-1"></div>
<div className="col-1">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<a class="navbar-brand" href="#">Navbar</a>
</nav>
</div>
<div className="col-7"></div>
<div className="col">
<nav class="navbar navbar-dark bg-dark">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavDropdown">
<ul class="navbar-nav">
<li class="nav-item active">
<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">About</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Services</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#">Contact</a>
</li>

</ul>
</div>
</nav>

</nav>
</div>
<div className="col-1"></div>
</div>
);
};

