import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram, FaPinterest} from 'react-icons/fa'
import {FooterContainer, SocialMedia, SocialMediaWrap, SocialLogo,SocialIcon, SocialIcons,
        SocialIconLink, WebsiteRights} from './FooterElements'

const Footer = () => {
    return(
        <FooterContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        <SocialIcon />
                        Explor
                    </SocialLogo>
                    <WebsiteRights>MonWebDev &copy; {new Date().getFullYear()}</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Pinterest">
                            <FaPinterest />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer