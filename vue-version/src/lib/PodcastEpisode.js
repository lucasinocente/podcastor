class PodcastEpisode {
  constructor(data) {
    this.title = data.title._cdata;
    this.pubDate = data.pubDate._text;
    this.creator = data['dc:creator']._cdata;
    this.audio = data.enclosure._attributes.url;
    this.image = data['itunes:image']._attributes.href;
    this.descriptionHtml = data['itunes:summary']._text;
  }
}

export default PodcastEpisode;