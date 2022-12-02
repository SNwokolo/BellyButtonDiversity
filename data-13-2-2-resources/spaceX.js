const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

// The code to retrieve thebfull name of the Vandenberg ir Force Base:
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// To access the latitude of the Vandenberg Airforce Base
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));
// Print the latitudes and longitudes of each SpaceX launch station
d3.json(url).then(spaceXResults =>
        spaceXResults.map(x => console.log(x.name, x.location.latitude, x.location.longitude))
        );
    