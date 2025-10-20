# 🔗 Link-in-Bio Challenge - Technically Web3

Welcome to the **Link-in-Bio Challenge**! This is a community challenge from Technically Web3 (TW3) where you'll build a dynamic link-in-bio website using only a JSON configuration file.

## 🎯 Challenge Overview

Create a beautiful, responsive link-in-bio website that renders entirely from a JSON file. The site should be themeable, customizable, and require **zero code changes** to the core files (`index.html` and `script.js`).

## 📁 Project Structure

```
challenge-linksite/
├── content/
│   └── data.json          # Your site configuration
├── styles/
│   ├── theme1.css         # Example theme
│   └── theme2.css         # Add your own themes!
├── index.html             # Main HTML file (DO NOT MODIFY)
├── script.js              # Main JavaScript file (DO NOT MODIFY)
└── README.md              # This file
```

## 🚀 Getting Started

1. **Fork this repository**
2. **Edit only the files in `/content` and `/styles` directories**
3. **Customize your `data.json`** with your information
4. **Create your own theme** or modify the existing one
5. **Deploy and share!**

## 📝 JSON Configuration

Your `data.json` file should follow this structure:

```json
{
  "theme": "theme1",
  "profile": {
    "name": "Your Name",
    "title": "Your Title",
    "bio": "Your bio description",
    "avatar": "path/to/avatar.jpg"
  },
  "links": [
    {
      "title": "Link Title",
      "url": "https://example.com",
      "icon": "🔗"
    }
  ],
  "social": {
    "twitter": "yourhandle",
    "github": "yourhandle",
    "linkedin": "yourhandle"
  }
}
```

## 🎨 Theme System

- Place your CSS files in the `/styles` directory
- Reference your theme in the JSON file: `"theme": "yourtheme"`
- The system will automatically load the corresponding CSS file
- Use CSS custom properties for easy customization

## ✨ Features to Implement

- [ ] Responsive design
- [ ] Theme switching via JSON
- [ ] Social media links
- [ ] Custom icons/emojis
- [ ] Hover effects
- [ ] Mobile optimization
- [ ] Accessibility features

## 🏆 Judging Criteria

1. **Functionality** - Does it work perfectly?
2. **Design** - Is it visually appealing?
3. **Creativity** - Unique themes and features
4. **Responsiveness** - Works on all devices
5. **Code Quality** - Clean, maintainable CSS

## 📤 Submission

1. Fork this repository
2. Create your link-in-bio site
3. Submit a pull request with your changes
4. Include screenshots in your PR description
5. Share on social media with #TechnicallyWeb3

## 🎁 Prizes

- **Best Overall Design** - $100
- **Most Creative Theme** - $50
- **Best Mobile Experience** - $50
- **Community Choice** - $25

## 📅 Timeline

- **Start**: [Current Date]
- **End**: [End Date]
- **Winners Announced**: [Announcement Date]

## 🤝 Community

Join the Technically Web3 community:
- **Twitter**: [@technicallyweb3](https://twitter.com/technicallyweb3)
- **Discord**: [Join our Discord](https://discord.gg/technicallyweb3)
- **GitHub**: [@technicallyweb3](https://github.com/technicallyweb3)

---

**Good luck, and happy coding! 🚀**

*Remember: You can only modify files in `/content` and `/styles` directories. The core `index.html` and `script.js` files should remain unchanged.*
