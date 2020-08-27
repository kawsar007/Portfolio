import React from 'react'
import { Button } from '@material-ui/core';

export default function Download() {
    const download = e => {
        console.log(e.target.href);
        fetch(e.target.href, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = window.URL.createObjectURL(new Blob([buffer]));
              const link = document.createElement("a");
              link.href = url;
              // link.setAttribute("download", "image.png"); //or any other extension
              link.setAttribute("download", "resume.pdf");
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          });
      };
      return (
        <div className="App">
          <a
            href="https://upload.wikimedia.org/wikipedia/en/6/6b/Hello_Web_Series_%28Wordmark%29_Logo.png"
            download
            onClick={e => download(e)}
          >
            <i className="fa fa-download" />
            RESUME
          </a>
        </div>
      );
}
