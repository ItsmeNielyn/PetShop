"use strict";

class App{
constructor(){
this.drop = [
{
	"Petname": "Dogko",
	"kind1": "Siberian Husky",
	"kind2":"Pug",
	"kind3":"Labrador Retriever",
	"kind4":"Poodle",
	"kind5":"Doberman"
},
{
	"Petname": "Catko",
	"kind1": "British Shorthair",
	"kind2":"Siamese Cat",
	"kind3":"Persian Cat",
	"kind4":"Bengal cat",
	"kind5":"Exotic Shorthair"
},
{
	"Petname": "Rabbitko",
	"kind1": "Deilenaar",
	"kind2":"Blanc de Popielno",
	"kind3":"Fee de Marbourg",
	"kind4":"Mini Satin Rabbit",
	"kind5":"Panon Rabbit"
}

];
this.abouty = [ 
{
	"logo": "img/pug.jpg",
	"title":"PUG",
	"para":"is a breed of dog with a wrinkly, short-muzzled face, and curled tail."
	

},
{
	"logo":"img/labrador.jpg",
	"title":"Labrador Retriever",
	"para":"is a type of retriever-gun dog.</br> is one of the most Popular breeds of dog in the United State."
	

},
{
	"logo":"img/burmese.jpg",
	"title":"Burmese",
	"para":"is a breed of a domestic cat, originating in southeast Asia"
	
}
];


this.ordery = [ 
{
	"hideimg": "img/iamge8.jpg",
	"image":"img/iamge8.jpg",
	"name":"Pug",
	"info": "Available",
	"price": "P 7,000"
	

},
{
	"hideimg": "img/iamge6.jpg",
	"image":"img/iamge6.jpg",
	"name":"Akita",
	"info": "Available",
	"price": "P 4,500"
	

},
{
	"hideimg": "img/iamge4.jpg",
	"image":"img/iamge4.jpg",
	"name":"American Pit Bull Terrier",
	"info": "Available",
	"price": "P 5,000"
	
}, 
{
	"hideimg": "img/husky.jpg",
	"image":"img/husky.jpg",
	"name":"Australian Shepherd",
	"info": "Available",
	"price": "P 6,000"
	
}, 
{
	"hideimg": "img/image7.jpg",
	"image":"img/image7.jpg",
	"name":"American Eskimo Dog",
	"info": "Available",
	"price": "P 4,000"
	
}, 
{
	"hideimg": "img/images.jpg",
	"image":"img/images.jpg",
	"name":"Bearded Collie",
	"info": "Available",
	"price": "P 9,909"
	
},
{
	"hideimg": "img/images.jpg",
	"image":"img/images.jpg",
	"name":"Bloodhound",
	"info": "Available",
	"price": "P 9909"
	
},  
{
	"hideimg": "img/exotic.jpg",
	"image":"img/exotic.jpg",
	"name":"exotic",
	"info": "Available",
	"price": "P 9909"
	
},  
{
	"hideimg": "img/coon.jpg",
	"image":"img/coon.jpg",
	"name":"Coon",
	"info": "Available",
	"price": "P 9909"
	
},  
];

}

render(html,component){
component.innerHTML += html;
}


reRender(html,component){
component.innerHTML = html;
}

updateDog(key){
let var_artist = document.getElementById('updateArtist');
let var_title = document.getElementById('updateTitle');
let var_instrument = document.getElementById('updateInstrument');
let sheet = {"artist":var_artist.value,"title":var_title.value,"instrument":var_instrument.value};
this.cart[key] = sheet;
this.cartInventory();
}

bookDetails(val){
		this.reRender(
			`
                    <div id="container">
                        <div id="row">
                            <div id="bookDetailsInfo">
                                <div class="col-lg-4 col-xs-12" id="adjustDetails">
                                    <div class="thumbnail"><img src="${this.books[key].image}"></div>
                                </div>
                                <div class="col-lg-8 col-xs-12" id="adjustDetails1">
                                    <h1 id="slimfont">${this.books[key].title}</h1>
                                    <button class="btn btn-primary btn-lg outline" onclick="component.bookUpdate(${key})">Update</button>
                                    <button class="btn btn-primary btn-lg outline" onclick="component.deleteBook(${key})">Delete</button>
                                    <button class="btn btn-primary btn-lg outline" onclick="component.showBookPage()">Back</button>
                                </div>
                                <div class="col-lg-12 col-xs-12" id="adjust100">
                                    <ul class="list-group">
                                      <li class="list-group-item"><span class="headername">Content:</span> ${this.books[key].content}</li>
                                      <li class="list-group-item"><span class="headername">Date:</span> ${this.books[key].date}</li>
                                      <li class="list-group-item"><span class="headername">Author:</span> ${this.books[key].author}</li>
                                      <li class="list-group-item"><span class="headername">Genre:</span> ${this.books[key].genre}</li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
				    	
			`,document.getElementById('bookDetails'));
			this.showUpdateDelete();
	}

dogUpdateInput(val){
let idNameRow="row"+val;
let html = `
<div class="col-lg-4 col-md-4 col-sm-6">
	<a href="${this.ordery[a].image}" class="fh5co-card-item image-popup">
		<figure>
			<div class="overlay"><i class="ti-plus"></i></div>
			<img src="${this.ordery[a].hideimg}" alt="Image" class="img-responsive">
		</figure>
		<div class="fh5co-text">
			<input id="txtName" value="${this.ordery[a].name}">
			<input id="txtName" value="${this.ordery[a].info}">
			<p><span class="price cursive-font">${this.ordery[a].price}</span></p>
			<button onclick="">Done</button>
		</div>
	</a>
</div>
`;
this.reRender(`${html}`,document.getElementById(`${idNameRow}`));
}

readOrderList(){
let orderList = document.getElementById('orderList');
let html = ``;
for (let a=0;a<this.ordery.length;a++){
html +=`
<div class="col-lg-4 col-md-4 col-sm-6">
	<a href="${this.ordery[a].image}" class="fh5co-card-item image-popup">
		<figure>
			<div class="overlay"><i class="ti-plus"></i></div>
			<img src="${this.ordery[a].hideimg}" alt="Image" class="img-responsive">
		</figure>
		<div class="fh5co-text">
			<h2>${this.ordery[a].name}</h2>
			<p>${this.ordery[a].info}</p>
			<p><span class="price cursive-font">${this.ordery[a].price}</span></p>			
		</div>
	</a>
	<center><button> <a href="#" onclick"component.bookDetails(${a})">Get Me</button></center>
</div>

`;
}
orderList.innerHTML = html;
}

readAboutList(){

let aboutList = document.getElementById('dogList');
let html = ``;
for (let i=0;i<this.abouty.length;i++){
html +=`

<div class="col-md-4">
	<img class="wew"><img src="${this.abouty[i].logo}" alt"/></img>
	<h3>${this.abouty[i].title}</h3>
	<p>${this.abouty[i].para}</p>
</div>

`;
}	
aboutList.innerHTML = html;
}
}



class Component extends App{
constructor(){		
super();
}

landingPage(){
let html = `

<nav class="gtco-nav" role="navigation">
	<div class="gtco-container">

		<div class="row">
			<div class="col-sm-4 col-xs-12">
				<div id="gtco-logo"><a href="#indexpage"  onclick="component.indexpage()"><em>PetLoverShop</em></a></div>
			</div>
			<div class="col-xs-8 text-right menu-1">
				<ul>
					<li><a href="#" onclick="component.indexpage()">Home</a></li>
					<li><a href="#" onclick="component.aboutpage()">About Us</a></li>
					<li><a href="#" onclick="component.contactpage()">Contact</a></li>
					<li class="btn-cta"><a href="#"  onclick="component.orderpage()"><span>Order</span></a></li>
				</ul>	
			</div>
		</div>
	</div>
</nav>



<div id="indexpage">
	<header id="gtco-header" class="gtco-cover gtco-cover-md" role="banner" style="background-image: url(img/image1.jpg)" data-stellar-background-ratio="0.5">
		<div class="overlay"></div>
		<div class="gtco-container">
			<div class="row">
				<div class="col-md-12 col-md-offset-0 text-left">
					<div class="row row-mt-15em">
						<div class="col-md-7 mt-text animate-box" data-animate-effect="fadeInUp">
							<span class="intro-text-small">You Can Have A True Friend! </span>
							<h1 class="cursive-font">@LoveKoPetKO.com</h1>	
						</div>
						<div class="col-md-4 col-md-push-1 animate-box" data-animate-effect="fadeInRight">
							<div class="form-wrap">
								<div class="tab">
									
									<div class="tab-content">
										<div class="tab-content-inner active" data-content="signup">
											<h3 class="cursive-font">Pet Order Info</h3>
											<form action="#">
												<div class="row form-group">
													<div class="col-md-12">
														<label for="activities">Kind of Pet</label>
														<select name="#" id="activitiesList" class="form-control">
															<option id="activitiesList" value="">${this.drop[0].Petname}</option>
															<option value="">${this.drop[0].kind1}</option>
															<option value="">${this.drop[0].kind2}</option>
															<option value="">${this.drop[0].kind3}</option>
															<option value="">${this.drop[0].kind4}</option>
															<option value="">${this.drop[0].kind5}</option>
														</select>
														<select name="#" id="activitiesList" class="form-control">
															<option value="">${this.drop[1].Petname}</option>
															<option value="">${this.drop[1].kind1}</option>
															<option value="">${this.drop[1].kind2}</option>
															<option value="">${this.drop[1].kind3}</option>
															<option value="">${this.drop[1].kind4}</option>
															<option value="">${this.drop[1].kind5}</option>
														</select>
														<select name="#" id="activitiesList" class="form-control">
															<option value="">${this.drop[2].Petname}</option>
															<option value="">${this.drop[2].kind1}</option>
															<option value="">${this.drop[2].kind2}</option>
															<option value="">${this.drop[2].kind3}</option>
															<option value="">${this.drop[2].kind4}</option>
															<option value="">${this.drop[2].kind5}</option>
														</select>
													</div>
												</div>
												<div class="row form-group">
													<div class="col-md-12">
														<label for="date-start">How many</label>
														<input type="text" id="number" class="form-control">
													</div>
												</div>
											</div>
											<div class="row form-group">
												<div class="col-md-12">
													<label for="date-start">Date</label>
													<input type="text" id="date" class="form-control">
												</div>
												<br>

												<div class="row form-group">
													<div class="col-md-12">
														<input type="submit" class="btn btn-primary btn-block js-gotop"onclick="component.indexpage()" value="Order Now!">
													</div>
												</div>
											</form>	
										</div>	
									</div>
								</div>
							</div>
						</header>
					</div>



					<div id="orderpage">
						<div class="gtco-section">
							<div class="gtco-containerz">
								<div class="row">
									<div class="col-md-8 col-md-offset-2 text-center gtco-heading">
										<h2 class="cursive-font primary-color">Popularpet</h2>
										<p>Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.</p>
									</div>
								</div>
								<div class="row" id="orderList">


								</div>
							</div>
						</div>
					</div>






					<div id="aboutpage">
						<div id="gtco-features">
							<div class="gtco-container">
								<div class="row">
									<div class="col-md-8 col-md-offset-2 text-center gtco-heading animate-box">
										<h2 class="cursive-font">HomeyPetShopped</h2>
										<p>WE CAN JUDGE THE HEART OF A MAN BY HIS TREATMENT OF ANIMALS</p>
									</div>
								</div>
								<center><h2> Our Best Seller</h2><center>

									<div id="dogList">
									</div>
								</div>
							</div>
						</div>
					</div>


					<div id="updatedeletepage">

			            <div class="container">
			                <div class="row">
			                    <div id="bookDetails"></div>
			                </div>
			            </div>

			        </div>




					<div id="contactpage">
						<div class="gtco-cover gtco-cover-sm" style="background-color:#F5A9A9;  data-stellar-background-ratio="0.5">
							<div class="overlay"></div>
							<div class="gtco-container text-center">
								<div class="display-t">
									<div class="display-tc">
										<form action="#">
											<div class="row form-group">
												<div class="col-md-12">
													<label class="sr-only" for="name">Name</label>
													<input type="text" id="name" class="form-control" placeholder="Your firstname">
												</div>

											</div>

											<div class="row form-group">
												<div class="col-md-12">
													<label class="sr-only" for="email">Email</label>
													<input type="text" id="email" class="form-control" placeholder="Your email address">
												</div>
											</div>
											<div class="row form-group">
												<div class="col-md-12">
													<label class="sr-only" for="message">Message</label>
													<textarea name="message" id="message" cols="30" rows="10" class="form-control" placeholder="Write us something"></textarea>
												</div>
											</div>
											<div class="form-group">
												<input type="submit" value="Send Message" class="btn btn-primary">
											</div>
										</form>
									</div>

									<div class="social-buttons">
										<a href="#" class="social-button facebook"><i class="fa fa-facebook"></i></a>
										<a href="#" class="social-button twitter"><i class="fa fa-twitter"></i></a><a href="#" class="social-button google"><i class="fa fa-google"></i></a>
										<a href="#" class="social-button dribbble"><i class="fa fa-dribbble"></i></a>
										<a href="#" class="social-button skype"><i class="fa fa-skype"></i></a>
									</div>	
								</div>
							</div>
						</div>
					</div>




					<footer id="gtco-footer" role="contentinfo" style="background-image: url(images/img_bg_1.jpg)" data-stellar-background-ratio="0.5">
						<div class="overlay"></div>
						<div class="gtco-container">
							<div class="row row-pb-md">

								<div class="col-md-12 text-center">
									<div class="gtco-widget">
										<h3>Continue to be with Us</h3>
										<ul class="gtco-quick-contact">
											<li><a href="#"><i class="icon-phone"></i> Phone :+1 234 567 890</a></li>
											<li><a href="#"><i class="icon-mail2"></i> Email: Espinosan.rizal@gmail.com</a></li>
										</ul>
									</div>
									<div class="gtco-widget">
										<h3>Here's our Social Sites</h3>
										<ul class="gtco-social-icons">
											<li><a href="#"><i class="icon-twitter"></i></a></li>
											<li><a href="#"><i class="icon-facebook"></i></a></li>
										</ul>
									</div>
								</div>

								<div class="col-md-12 text-center copyright">
									<p><small class="blockie">&copy; 2016 Free HTML5. All Rights Reserved.</small> 

									</div>

								</div>



							</div>
						</footer>
						<!-- </div> -->

					</div>

					<div class="gototop js-top">
						<a href="#" class="js-gotop"><i class="icon-arrow-up"></i></a>
					</div>
					`;
					this.reRender(`${html}`,document.getElementById("app"));
				}

				indexpage(){
				$('#indexpage').show();
				$('#aboutpage').hide();
				$('#contactpage').hide();
				$('#orderpage').hide();
				$('#updatedeletepage').hide();
			}

			aboutpage(){
			$('#indexpage').hide();
			$('#aboutpage').show();
			$('#contactpage').hide();
			$('#orderpage').hide();
			$('#updatedeletepage').hide();
		}

		contactpage(){
		$('#indexpage').hide();
		$('#aboutpage').hide();
		$('#contactpage').show();
		$('#orderpage').hide();
		$('#updatedeletepage').hide();
	}

	orderpage(){
	$('#indexpage').hide();
	$('#aboutpage').hide();
	$('#contactpage').hide();
	$('#orderpage').show();
	$('#updatedeletepage').hide();
}

	showUpdateDelete(){
	$('#indexpage').hide();
	$('#aboutpage').hide();
	$('#contactpage').hide();
	$('#orderpage').hide();
	$('#updatedeletepage').show();
	}

}

let component = new Component();
component.landingPage();
component.readAboutList();
component.readOrderList();



