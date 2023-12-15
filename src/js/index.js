const ndi_base_url = "http://192.168.0.21";

// Write a comment here
const ndi_sources_request_url = `${ndi_base_url}/v1/sources`;
const ndi_sources_request_headers = { method: "GET" };
const ndi_configuration_request_url = `${ndi_base_url}/v1/configuration`;
const ndi_configuration_request_headers = { method: "POST" };

// Write a comment here
document.addEventListener("DOMContentLoaded", () => {
  const video_sources_selector = document.getElementById("video-source");
  fetch(ndi_sources_request_url, ndi_sources_request_headers)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.ndi_sources.forEach((source) => {
        var option = document.createElement("option");
        option.innerHTML = source;
        option.value = source;
        video_sources_selector.appendChild(option);
      });
    });
});
