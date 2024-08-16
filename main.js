chrome.tabs.query(
    {active: true, currentWindow: true},
    tabs => {
        // get url
        let url = tabs[0].url;
        let hostname = new URL(url).hostname;

        if (hostname == 'www.youtube.com') {
            heading.textContent = '';
            heading.style.display = 'none';

            // get vid id
            let searchParams = new URLSearchParams(url);
            let vidId = Array.from(searchParams.values())[0];

            // get thumbnail
            let thumbnailUrl = `http://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;
            imageDisp.src = thumbnailUrl;

            document.body.style = 'width: 100%; height: 100%';
        } else {
            heading.textContent = 'Not YouTube';
            imageDisp.style.display = 'none';
        }
    }
)