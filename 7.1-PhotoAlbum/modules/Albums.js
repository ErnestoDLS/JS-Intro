import React from 'react'
import { Link } from 'react-router'
import Album from './Album'
import NavLink from './NavLink'


export default React.createClass({
  getDefaultProps() {
    return {
      albums: [
        {
          title: "SuperHeros",
          photos: [
              {
                title: "Spiderman",
                source: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiIr9rH5PHMAhWERyYKHVZhCD8QjRwIBw&url=http%3A%2F%2Fmarvel.com%2Fcharacters%2F54%2Fspider-man&psig=AFQjCNHf87UD86DmA2PokRk8peEMyN2Wmg&ust=1464147483679967"
              },
              {
                title: "Wolverine",
                source: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiQ65zy6vHMAhVEQCYKHd_mDVwQjRwIBw&url=http%3A%2F%2Fwww.ufunk.net%2Fen%2Fillustration%2Fwolverine-une-selection-de-25-magnifiques-illustrations-fan-art%2F&bvm=bv.122676328,d.eWE&psig=AFQjCNGI1lDX0ZG6GC1LN60GzHybYCPqtQ&ust=1464147546628097"
              }
            ]
        },
        {
          title: "Superman",
          source: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwim2bGP6_HMAhVB6yYKHcjxB3EQjRwIBw&url=http%3A%2F%2Fwww.orlandoweekly.com%2FBlogs%2Farchives%2F2013%2F06%2F01%2Fsuperman-art-show-celebrating-75-years-of-the-man-of-steel&bvm=bv.122676328,d.eWE&psig=AFQjCNHwZUrZOJBEPwqGtwCUQzkJGsTRkQ&ust=1464149235105158"
        }
        {
          title: "Pets",
          photos: [
              {
                title: "Puppy",
                source: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiy56q36_HMAhWJYyYKHcpID5EQjRwIBw&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DEz2OSSgCMlM&bvm=bv.122676328,d.eWE&psig=AFQjCNGO-jvRghT6d1h5JWNAXG4tU9uiDQ&ust=1464149323363710"
              },
              {
                title: "Kitten",
                source: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjYwoH97PHMAhWCRyYKHYCwCeIQjRwIBw&url=http%3A%2F%2Fwww.siberiancat.com%2Fbuying-a-mystic-melody-kitten.html&bvm=bv.122676328,d.eWE&psig=AFQjCNHtUKYYOr3hT2LYrXKofeOLIe1rqA&ust=1464149621030104"
              }
            ]
        },
        {
          title: "Cat Dog",
          source: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjU0eCb7vHMAhVD7SYKHVx0C60QjRwIBw&url=http%3A%2F%2Fwww.kimballstock.com%2Fresults.asp%3Fimage%3DDOK%252001%2520BK0072%252001&bvm=bv.122676328,d.eWE&psig=AFQjCNGA5rCpDOv4JCGA2G67PuDQ4Xmn9g&ust=1464149892570188"
        }
      ]
    },
    {
      title: "Martial Arts",
      photos: [
        {
          title: "RPbjj",
          soruce: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjLzNGv7_HMAhXF5CYKHdDKDL0QjRwIBw&url=https%3A%2F%2Ftwitter.com%2Frpbjj&bvm=bv.122676328,d.eWE&psig=AFQjCNFf1K0SviVvq2Q0jfZGN0kytd3YSw&ust=1464150382151415"
        }
      ]
    },
    {
      title: "Krav Maga",
      source: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjm8uXK7_HMAhUE5yYKHev9A-UQjRwIBw&url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2F89333519%40N07%2F14759305051&bvm=bv.122676328,d.eWE&psig=AFQjCNEqpBNUrcaKuPttRL0aoGyynIUjmg&ust=1464150439111098"
    },
    {
      title: "Bjj",
      source: "/Downloads/images/Choke.jpg"
    }
  },
  {
    title: "Destinations",
    photos: [
      {
        title: "Paradise",
        source: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjKmvqJ8_HMAhWJ2yYKHZGRDdIQjRwIBw&url=http%3A%2F%2Fweknowyourdreamz.com%2Fparadise.html&bvm=bv.122676328,d.eWE&psig=AFQjCNE_zCXEDxMWNZmGwwHKDNATaVZZyw&ust=1464151375626475"
      }
    ]
  },
  {
    title: "Rome",
    source: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjTttPk8_HMAhVKOCYKHUpJBFcQjRwIBw&url=http%3A%2F%2Fwww.fodors.com%2Fworld%2Feurope%2Fitaly%2Frome&bvm=bv.122676328,d.eWE&psig=AFQjCNHbXuQg7o2d8NGaC7xwaE8cusCWpg&ust=1464151561099425"
  },
  {
    title: "Egypt",
    source: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjB96aq9PHMAhXCyyYKHWO0A7EQjRwIBw&url=https%3A%2F%2Fwww.teachaway.com%2Fteach-in-egypt&bvm=bv.122676328,d.eWE&psig=AFQjCNHY0SexaKQKS6LsKb2xuGX46XH_uQ&ust=1464151679788968"
  },
  {
    title: "Tv",
    photos:[
      {
        title: "Mad Men",
        source: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwinx8mm9fHMAhVG7SYKHemXDLYQjRwIBw&url=http%3A%2F%2Fwww.people.com%2Farticle%2Fmad-men-fan-art-deviantart-aaron-kirby&bvm=bv.122676328,d.eWE&psig=AFQjCNH7kNnyM3rmLoFGvjzBLVGo0kxcow&ust=1464151954699940"
      }
    ]
  },
  {
    title: "Buffy",
    source: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwikw67t9fHMAhUE4yYKHdZZALAQjRwIBw&url=http%3A%2F%2Fjosswhedon.blogspot.com%2F2012%2F04%2Fbuffy-and-angel-episode-viewing-order.html&bvm=bv.122676328,d.eWE&psig=AFQjCNFhu2vNOLlzIY6uvM7035gLR-1pDg&ust=1464152115189708"
  },
  {
    title: "Dragon Ball Z",
    source: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiA-qzN9vHMAhWISyYKHZC9D9YQjRwIBw&url=http%3A%2F%2Fwallpaper.zone%2Ftrunks-dbz-wallpaper&bvm=bv.122676328,d.eWE&psig=AFQjCNFIBARaaiq3AQsc0TyEueNGHNLcAg&ust=1464152255506483"
  },
  {
    title: "Movies",
    photos: [
      {
        title: "The Boondock Saints",
        source: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiVhaqM-PHMAhWFyyYKHdINB1AQjRwIBw&url=http%3A%2F%2Fwww.ascully.com%2Fthe-boondock-saints-unrated-special-edition%2F&bvm=bv.122676328,d.eWE&psig=AFQjCNH35yBERYdb0Bz7YD7OPaOCaxUwXg&ust=1464152712066512"
      }
    ]
  },
  {
    title: "Memento",
    source: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiIo_-7-PHMAhWEeSYKHY0bBuEQjRwIBw&url=http%3A%2F%2Fmentalfloss.com%2Farticle%2F64298%2F15-things-you-might-not-know-about-memento&bvm=bv.122676328,d.eWE&psig=AFQjCNFIWv5ttBrzNU_CoxFWnIEiAu4K5Q&ust=1464152783858701"
  },
  {
    title: "Game of Death",
    source: "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiSwd6D-fHMAhWDQiYKHR-jCMUQjRwIBw&url=https%3A%2F%2Fthehande.wordpress.com%2F2014%2F01%2F18%2Ftop-5-bruce-lee-movies%2F&bvm=bv.122676328,d.eWE&psig=AFQjCNEGTeT9BeRwJyVp-lLmE2uBBTBYMA&ust=1464152866907724"
  };

  componentWillMount() {
    this.setState(
      {
        currentAlbum: this.props.albums[0]
      }
    )
  },
  handleAlbumClick(e){

    e.preventDefault();
  },
  render() {
    return (
      <div>
        <aside>
          <nav>
            {
              this.props.albums.map(function(album, i){
                return <Link key={i} to={`/albums/${album.title}`} onClick={this.handleAlbumClick}> { album.title } </Link>
              }, this)
            }
          </nav>
        </aside>

        <Album album={this.state.currentAlbum}/>
      </div

      <div>
        <h2>Repos</h2>

        <ul>
          <li><Link to="/albums/reactjs/react-router">React Router</Link></li>
          <li><Link to="/albums/facebook/react">React</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
