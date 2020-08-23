				var dataTitle;
				var posterURL;
				var dataDirector;
				var dataPlot;
				var dataActors;
				var title = document.getElementById('title').value;
				var movieValue = document.getElementById("premovies").value;
		 
		 function selectMovies() {
		   var movieValue = document.getElementById("premovies").value;
                var url = "http://www.omdbapi.com/?t=" + movieValue + "&apikey=172a0f59&y=&plot=full&r=json";
				fetch("http://www.omdbapi.com/?t=" + movieValue + "&apikey=172a0f59&y=&plot=full&r=json")
				.then(function(response) {return response.json();})
				.then(function(json) {
					dataTitle = json.Title;
					posterURL = json.Poster;
					dataDirector = json.Director;
					dataPlot = json.Plot;
					dataActors = json.Actors;
					
					document.getElementById('movieTitle').innerHTML = "<b>Title:</b>" + " " + dataTitle;
					document.getElementById('movieDirector').innerHTML = "Director:" + " " + dataDirector;
					document.getElementById('moviePlot').innerHTML = "Plot:" + " " + dataPlot;
					document.getElementById('movieActors').innerHTML = "Actors/Actresses:" + " " + dataActors;
					document.getElementById('poster').src = posterURL;
		
		 
		 })}
		 
              
			 function myFunction()
            {
                var title = document.getElementById('title').value;
                var url = "http://www.omdbapi.com/?t=" + title + "&apikey=172a0f59&y=&plot=full&r=json";
				fetch("http://www.omdbapi.com/?t=" + title + "&apikey=172a0f59&y=&plot=full&r=json")
				.then(function(response) {return response.json();})
				.then(function(json) {
					dataTitle = json.Title;
					posterURL = json.Poster;
					dataDirector = json.Director;
					dataPlot = json.Plot;
					dataActors = json.Actors;
					
					document.getElementById('movieTitle').innerHTML = "Title:" + " " + dataTitle;
					document.getElementById('movieDirector').innerHTML = "Director:" + " " + dataDirector;
					document.getElementById('moviePlot').innerHTML = "Plot:" + " " + dataPlot;
					document.getElementById('movieActors').innerHTML = "Actors/Actresses:" + " " + dataActors;
					document.getElementById('poster').src = posterURL;
		
				})}