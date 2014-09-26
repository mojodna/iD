# iD - friendly JavaScript editor for the National Park Service's [Places project](http://www.nps.gov/poi/)

## Basics

* iD is a JavaScript [OpenStreetMap](http://www.openstreetmap.org/) editor.
* It's intentionally simple. It lets you do the most basic tasks while
  not breaking other people's data.
* It supports modern browsers. Data is rendered with [d3](http://d3js.org/).

## Participate!

You can participate by either contributing to the OpenStreetMap iD project using the steps below, or by contributing directly to the NPS project. Contributions to the NPS projects will not be including in the OpenStreetMap project, but changes to the OpenStreetMap project may be included in the NPS project.
* [Try out the latest stable release](http://openstreetmap.us/iD/release)
* [Read up on Contributing and the code style of iD](CONTRIBUTING.md)
* See [open issues in the issue tracker](https://github.com/openstreetmap/iD/issues?state=open) if you're looking for something to do

## Installation

In order to make syncing with the [openstreetmap/iD](https://github.com/openstreetmap/iD) project easier, we do not include a prebuilt version of the NPS project. You will need to build the project in order to use it.

## Building / Installing

You can build a concatenated and minified version of iD with the command `make`. Node.js is
required for this.

iD will be built to the `dist` directory. This directory is designed to be self-contained; you should be able to copy it
into the public directory of your webserver to deploy iD. This functionality will be improved in future releases of the NPS iD editor, since we require Windows compatibility (no sym links) for our web server.

## License

iD is available under the [WTFPL](http://sam.zoy.org/wtfpl/), though obviously, if you want to dual-license
any contributions that's cool. It includes [d3js](http://d3js.org/), which BSD-licensed.

## Thank you

Initial development of iD was made possible by a [grant of the Knight Foundation](http://www.mapbox.com/blog/knight-invests-openstreetmap/).
