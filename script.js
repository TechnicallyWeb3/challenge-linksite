/**
 * Link-in-Bio Dynamic Renderer
 * This script loads JSON configuration and renders the link-in-bio page
 * DO NOT MODIFY - This file should remain unchanged
 */

class LinkInBioRenderer {
    constructor() {
        this.config = null;
        this.init();
    }

    async init() {
        try {
            await this.loadConfiguration();
            await this.loadTheme();
            this.renderPage();
            this.hideLoading();
        } catch (error) {
            console.error('Failed to initialize link-in-bio:', error);
            this.showError(error.message);
        }
    }

    async loadConfiguration() {
        try {
            const response = await fetch('./content/data.json');
            if (!response.ok) {
                throw new Error(`Failed to load configuration: ${response.status} ${response.statusText}`);
            }
            this.config = await response.json();
            
            // Validate required fields
            if (!this.config.profile || !this.config.links) {
                throw new Error('Invalid configuration: missing required fields');
            }
        } catch (error) {
            throw new Error(`Configuration error: ${error.message}`);
        }
    }

    async loadTheme() {
        const theme = this.config.theme || 'technicallyweb3';
        const themePath = `./styles/${theme}.css`;
        
        return new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = themePath;
            link.onload = () => resolve();
            link.onerror = () => {
                console.warn(`Theme ${theme} not found, using default styling`);
                resolve(); // Continue with default styles
            };
            document.head.appendChild(link);
        });
    }

    renderPage() {
        this.renderProfile();
        this.renderLinks();
        this.renderSocial();
        this.applyCustomization();
    }

    renderProfile() {
        const profile = this.config.profile;
        
        // Set avatar
        const avatar = document.getElementById('avatar');
        if (avatar && profile.avatar) {
            avatar.src = profile.avatar;
            avatar.alt = `${profile.name} avatar`;
        }

        // Set name
        const name = document.getElementById('name');
        if (name && profile.name) {
            name.textContent = profile.name;
        }

        // Set title
        const title = document.getElementById('title');
        if (title && profile.title) {
            title.textContent = profile.title;
        }

        // Set bio
        const bio = document.getElementById('bio');
        if (bio && profile.bio) {
            bio.textContent = profile.bio;
        }
    }

    renderLinks() {
        const linksContainer = document.getElementById('links');
        if (!linksContainer || !this.config.links) return;

        linksContainer.innerHTML = '';

        this.config.links.forEach((link, index) => {
            const linkElement = this.createLinkElement(link, index);
            linksContainer.appendChild(linkElement);
        });
    }

    createLinkElement(link, index) {
        const linkItem = document.createElement('div');
        linkItem.className = 'link-item';
        linkItem.style.animationDelay = `${index * 0.1}s`;

        const linkContent = document.createElement('a');
        linkContent.className = 'link-content';
        linkContent.href = link.url;
        linkContent.target = '_blank';
        linkContent.rel = 'noopener noreferrer';
        linkContent.setAttribute('aria-label', `Visit ${link.title}`);

        // Create icon
        const icon = document.createElement('div');
        icon.className = 'link-icon';
        icon.textContent = link.icon || '🔗';

        // Create text content
        const textContent = document.createElement('div');
        textContent.className = 'link-text';

        const title = document.createElement('div');
        title.className = 'link-title';
        title.textContent = link.title;

        const description = document.createElement('div');
        description.className = 'link-description';
        description.textContent = link.description || '';

        textContent.appendChild(title);
        if (link.description) {
            textContent.appendChild(description);
        }

        linkContent.appendChild(icon);
        linkContent.appendChild(textContent);
        linkItem.appendChild(linkContent);

        return linkItem;
    }

    renderSocial() {
        const socialContainer = document.getElementById('social');
        if (!socialContainer || !this.config.social) return;

        socialContainer.innerHTML = '';

        const socialPlatforms = {
            twitter: { icon: '🐦', url: 'https://twitter.com/' },
            github: { icon: '🐙', url: 'https://github.com/' },
            linkedin: { icon: '💼', url: 'https://linkedin.com/in/' },
            youtube: { icon: '📺', url: 'https://youtube.com/@' },
            discord: { icon: '💬', url: 'https://discord.gg/' },
            instagram: { icon: '📷', url: 'https://instagram.com/' },
            tiktok: { icon: '🎵', url: 'https://tiktok.com/@' },
            twitch: { icon: '🎮', url: 'https://twitch.tv/' }
        };

        Object.entries(this.config.social).forEach(([platform, handle]) => {
            if (handle && socialPlatforms[platform]) {
                const socialLink = this.createSocialLink(platform, handle, socialPlatforms[platform]);
                socialContainer.appendChild(socialLink);
            }
        });
    }

    createSocialLink(platform, handle, platformData) {
        const link = document.createElement('a');
        link.className = 'social-link';
        link.href = `${platformData.url}${handle}`;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.setAttribute('aria-label', `Visit ${platform} profile`);
        link.textContent = platformData.icon;

        return link;
    }

    applyCustomization() {
        if (!this.config.customization) return;

        const root = document.documentElement;
        const customization = this.config.customization;

        // Apply custom CSS variables
        if (customization.background) {
            root.style.setProperty('--bg-primary', customization.background);
        }
        if (customization.accentColor) {
            root.style.setProperty('--accent-color', customization.accentColor);
        }
        if (customization.textColor) {
            root.style.setProperty('--text-primary', customization.textColor);
        }
        if (customization.linkColor) {
            root.style.setProperty('--link-color', customization.linkColor);
        }

        // Apply background directly to body if specified
        if (customization.background) {
            document.body.style.background = customization.background;
        }
    }

    hideLoading() {
        const loading = document.getElementById('loading');
        const app = document.getElementById('app');
        
        if (loading) loading.classList.add('hidden');
        if (app) app.classList.remove('hidden');
    }

    showError(message) {
        const loading = document.getElementById('loading');
        const app = document.getElementById('app');
        const error = document.getElementById('error');
        const errorMessage = document.getElementById('error-message');
        
        if (loading) loading.classList.add('hidden');
        if (app) app.classList.add('hidden');
        if (error) error.classList.remove('hidden');
        if (errorMessage) errorMessage.textContent = message;
    }
}

// Analytics and performance tracking
class Analytics {
    constructor() {
        this.init();
    }

    init() {
        // Track page load time
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
        });

        // Track link clicks
        document.addEventListener('click', (event) => {
            const link = event.target.closest('a');
            if (link) {
                this.trackClick(link.href, link.textContent.trim());
            }
        });
    }

    trackClick(url, text) {
        console.log(`Link clicked: ${text} -> ${url}`);
        // Add your analytics tracking here
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    new LinkInBioRenderer();
    new Analytics();
});

// Service Worker registration for offline support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export for potential external use
window.LinkInBioRenderer = LinkInBioRenderer;
