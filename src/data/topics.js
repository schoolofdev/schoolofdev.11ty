'use strict'
const Cache = require("@11ty/eleventy-cache-assets");
const slugify = require('slugify');
module.exports = async function() {
    let folder = "topics";
    let id = "SchoolOfDev-Topics";
	let url = `http://appblocks.localhost/api/blocks/${id}`;
	const response = await Cache(url, {duration: "4h", type: "json"});
	let data = response.map(item => {
		item.slug = `/${folder}/` + slugify(`${item.title} ${item.id} ${item.name}`);
		//item.brewery_slug = `/brewery/` + slugify(`${item.brewery}`);
		return item;
	});
	return data;
};