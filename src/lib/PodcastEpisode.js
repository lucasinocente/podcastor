class PodcastEpisode {
  constructor(data) {
    this.title = data.title;
    this.pubDate = data.pubDate;
    this.creator = data.creator;
    this.audio = data.audio;
    this.image = data.image;
    this.descriptionHtml = data.descriptionHtml;
  }
}

export default PodcastEpisode;