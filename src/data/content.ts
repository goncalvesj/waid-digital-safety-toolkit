export const decisionTrees = {
  safetyQuestionnaire: {
    id: "safety-questionnaire", 
    title: "Digital Safety Questionnaire",
    description: "Step-by-step assessment to provide tailored safety guidance",
    startNode: "initial",
    nodes: {
      initial: {
        question: "I'm here to help you with digital safety. What situation brings you here today?",
        options: [
          {
            text: "I think someone is monitoring my digital activities",
            next: "monitoring-concerns"
          },
          {
            text: "My accounts or devices may have been compromised", 
            next: "compromise-assessment"
          },
          {
            text: "I'm experiencing online harassment or abuse",
            next: "harassment-assessment"
          },
          {
            text: "Someone shared intimate images/videos of me without consent",
            next: "image-abuse-help"
          },
          {
            text: "I want to learn how to stay safer online",
            next: "prevention-guidance"
          },
          {
            text: "I'm worried about my safety in a relationship",
            next: "relationship-safety"
          }
        ]
      },
      "monitoring-concerns": {
        question: "What makes you think someone might be monitoring your digital activities?",
        options: [
          {
            text: "Someone knows things about my online activities they shouldn't",
            next: "activity-knowledge"
          },
          {
            text: "My partner/ex checks my phone or demands passwords",
            next: "partner-monitoring"
          },
          {
            text: "My device is acting strangely (slow, hot, battery drain)",
            next: "device-symptoms"
          },
          {
            text: "I found apps on my device I didn't install",
            next: "unknown-apps"
          },
          {
            text: "Someone seems to know where I've been",
            next: "location-tracking"
          }
        ]
      },
      "activity-knowledge": {
        question: "How specific is the information they know about your online activities?",
        options: [
          {
            text: "They know specific websites I've visited",
            next: "browsing-monitored"
          },
          {
            text: "They know about my private messages or emails",
            next: "communications-monitored"
          },
          {
            text: "They know about my social media activity",
            next: "social-monitored"
          },
          {
            text: "They know general information about my online activities",
            next: "general-monitoring"
          }
        ]
      },
      "browsing-monitored": {
        guidance: {
          title: "Your Browsing is Being Monitored",
          content: "Someone having detailed knowledge of your browsing history indicates serious privacy violations. This could be through browser history checking, spyware, or network monitoring.",
          immediateActions: [
            "Use private/incognito browsing mode for all sensitive browsing",
            "Clear your browser history regularly if safe to do so",
            "Use a different device (friend's phone, public computer) for private research",
            "Check your device for monitoring apps or spyware",
            "Consider that your home WiFi network might be monitored"
          ],
          nextSteps: "Your safety is priority. Use our Device Security Checklist when you can access it safely. Consider reaching out to Women's Aid (1800 341 900) from a safe location for support."
        }
      },
      "communications-monitored": {
        guidance: {
          title: "Your Messages and Emails Are Being Monitored",
          content: "Access to your private communications is a serious violation. This could indicate compromised accounts, device monitoring, or someone having your passwords.",
          immediateActions: [
            "Change passwords on all email and messaging accounts when it's safe",
            "Enable two-factor authentication on important accounts",
            "Check for email forwarding rules you didn't create",
            "Use a secure device to communicate with trusted people",
            "Consider creating new accounts they don't know about"
          ],
          nextSteps: "This is serious monitoring. Follow our Email Security Checklist and Safe Communication guide when safe to do so. Reach out for professional support - Women's Aid 1800 341 900."
        }
      },
      "compromise-assessment": {
        question: "What signs of compromise have you noticed?",
        options: [
          {
            text: "I can't log into my accounts - passwords seem changed",
            next: "locked-out"
          },
          {
            text: "Friends say they got messages from me I didn't send",
            next: "unauthorized-messages"
          },
          {
            text: "I see emails in my sent folder I didn't write",
            next: "sent-folder-messages"
          },
          {
            text: "My account settings have been changed",
            next: "settings-changed"
          },
          {
            text: "I'm getting security alerts about logins I didn't make",
            next: "security-alerts"
          }
        ]
      },
      "locked-out": {
        question: "Which accounts can't you access?",
        options: [
          {
            text: "My email account",
            next: "email-locked-out"
          },
          {
            text: "Social media accounts (Facebook, Instagram, etc.)",
            next: "social-locked-out"
          },
          {
            text: "Multiple accounts across different services",
            next: "multiple-locked-out"
          },
          {
            text: "Banking or financial accounts",
            next: "financial-locked-out"
          }
        ]
      },
      "email-locked-out": {
        guidance: {
          title: "Email Account Locked Out",
          content: "Being locked out of your email is serious because email is often used to recover other accounts. Someone may have changed your password deliberately.",
          immediateActions: [
            "Try the 'Forgot Password' option using your phone number if available",
            "Contact your email provider's support immediately",
            "Check if you can access any backup email accounts",
            "Secure any other accounts that don't use this email for recovery",
            "Alert trusted contacts that your email may be compromised"
          ],
          nextSteps: "Email compromise affects all your other accounts. Use our Account Recovery Checklist and consider professional help if this was done deliberately by someone you know."
        }
      },
      "harassment-assessment": {
        question: "What type of online harassment are you experiencing?",
        options: [
          {
            text: "Threatening or abusive messages",
            next: "threatening-messages"
          },
          {
            text: "Someone is impersonating me online",
            next: "impersonation"
          },
          {
            text: "My personal information was shared publicly",
            next: "doxxing"
          },
          {
            text: "Someone creates fake accounts to contact me",
            next: "fake-accounts"
          },
          {
            text: "Continuous harassment despite blocking them",
            next: "persistent-harassment"
          }
        ]
      },
      "threatening-messages": {
        question: "Where are you receiving these threatening messages?",
        options: [
          {
            text: "Text messages to my phone",
            next: "text-threats"
          },
          {
            text: "Social media (Facebook, Instagram, Twitter, etc.)",
            next: "social-threats"
          },
          {
            text: "Email messages",
            next: "email-threats"
          },
          {
            text: "Multiple platforms",
            next: "multi-platform-threats"
          }
        ]
      },
      "text-threats": {
        guidance: {
          title: "Threatening Text Messages",
          content: "Threatening messages sent to your phone are serious and may constitute criminal harassment. Your safety is important.",
          immediateActions: [
            "Take screenshots of all threatening messages - include phone numbers and timestamps",
            "Do NOT respond to the threats - any response can escalate the situation",
            "Block the phone number immediately",
            "Save the evidence in multiple safe places",
            "If threats mention violence or harm, contact Gardaí immediately"
          ],
          nextSteps: "Document everything safely. Contact Women's Aid (1800 341 900) for support and guidance. If threats are serious, report to local Gardaí."
        }
      },
      "image-abuse-help": {
        question: "What happened with the images or videos?",
        options: [
          {
            text: "They were shared on social media without my consent",
            next: "social-image-sharing"
          },
          {
            text: "They were sent to people I know",
            next: "targeted-image-sharing"
          },
          {
            text: "They were posted on websites",
            next: "website-image-sharing"
          },
          {
            text: "I'm being threatened that they will be shared",
            next: "image-threats"
          }
        ]
      },
      "social-image-sharing": {
        guidance: {
          title: "Intimate Images Shared on Social Media",
          content: "Sharing intimate images without consent is illegal in Ireland under the Harassment, Harmful Communications and Related Offences Act 2020. You have rights and options.",
          immediateActions: [
            "Screenshot the posts as evidence (include usernames, timestamps, URLs)",
            "Report the content to the platform immediately - state it was shared without consent",
            "Do NOT engage with or respond to the person who shared them",
            "Contact hotline.ie for specialized support with image-based abuse",
            "Consider reporting to An Garda Síochána - this is a criminal offence"
          ],
          nextSteps: "This is serious abuse. Contact Women's Aid (1800 341 900) for emotional support and hotline.ie for removal assistance. Keep all evidence safe."
        }
      },
      "image-threats": {
        guidance: {
          title: "Threats to Share Intimate Images",
          content: "Threatening to share intimate images is blackmail and a serious crime. You don't have to give in to these threats.",
          immediateActions: [
            "Screenshot all threats as evidence",
            "Do NOT give in to any demands - this rarely stops the behavior",
            "Block the person making threats on all platforms",
            "Report the threats to Gardaí - blackmail is a serious crime",
            "Reach out for support - you're not alone in this"
          ],
          nextSteps: "Contact Women's Aid (1800 341 900) immediately for support. Report to Gardaí as this is criminal blackmail. Document everything for evidence."
        }
      },
      "prevention-guidance": {
        question: "What area of digital safety would you like to focus on?",
        options: [
          {
            text: "Making my social media accounts more private",
            next: "social-privacy"
          },
          {
            text: "Protecting my email and online accounts",
            next: "account-security"
          },
          {
            text: "Keeping my location information private",
            next: "location-privacy"
          },
          {
            text: "Learning about digital abuse warning signs",
            next: "abuse-awareness"
          },
          {
            text: "General device and internet safety",
            next: "general-safety"
          }
        ]
      },
      "social-privacy": {
        guidance: {
          title: "Social Media Privacy Protection",
          content: "Protecting your privacy on social media helps keep you safer and gives you more control over who can contact and find you.",
          immediateActions: [
            "Set all your profiles to private (friends/followers only)",
            "Remove personal information like phone numbers, addresses, and workplace",
            "Turn off location sharing and geotagging in all social apps",
            "Review your friends/followers and remove people you don't trust",
            "Check who can find you by email or phone number - limit this"
          ],
          nextSteps: "Complete our Social Media Privacy Checklist for detailed steps on each platform. Regular privacy reviews help keep you protected."
        }
      },
      "relationship-safety": {
        question: "What concerns you most about digital safety in your relationship?",
        options: [
          {
            text: "My partner checks my phone or demands passwords",
            next: "partner-control"
          },
          {
            text: "They seem to know where I go and who I talk to",
            next: "surveillance-concern"
          },
          {
            text: "They control my access to technology or internet",
            next: "tech-restriction"
          },
          {
            text: "I'm planning to leave but worried about staying safe",
            next: "leaving-safety"
          },
          {
            text: "I want to communicate safely for help",
            next: "safe-help-seeking"
          }
        ]
      },
      "partner-control": {
        question: "How often does your partner check your devices or demand passwords?",
        options: [
          {
            text: "Daily or constantly",
            next: "constant-control"
          },
          {
            text: "Several times a week",
            next: "regular-control"
          },
          {
            text: "When they're suspicious or angry",
            next: "suspicious-control"
          },
          {
            text: "They've demanded passwords to all my accounts",
            next: "password-demands"
          }
        ]
      },
      "constant-control": {
        guidance: {
          title: "Constant Digital Monitoring",
          content: "Constant checking of your devices is a serious form of abuse and control. You deserve privacy and respect in your relationship.",
          immediateActions: [
            "Know that this behavior is NOT normal or acceptable in healthy relationships",
            "Use private browsing mode whenever possible",
            "If safe, use trusted friends' devices for private communication",
            "Learn about local support services when you can do so safely",
            "Remember: you deserve privacy and this is a form of abuse"
          ],
          nextSteps: "Your safety comes first. When safe, contact Women's Aid (1800 341 900) for confidential support and safety planning guidance."
        }
      },
      "leaving-safety": {
        question: "What aspect of digital safety planning worries you most?",
        options: [
          {
            text: "Communicating safely to get help",
            next: "safe-communication-planning"
          },
          {
            text: "Preventing them from tracking my location",
            next: "location-safety-planning"
          },
          {
            text: "Securing new accounts they don't know about",
            next: "new-account-planning"
          },
          {
            text: "Hiding my safety planning activities",
            next: "concealing-planning"
          }
        ]
      },
      "safe-communication-planning": {
        guidance: {
          title: "Safe Communication for Help",
          content: "Communicating safely while being monitored requires careful planning. There are ways to reach out for help securely.",
          immediateActions: [
            "Use trusted friends' devices when possible - not your own",
            "Use public computers at libraries, community centers, or work",
            "Memorize important helpline numbers: Women's Aid 1800 341 900",
            "Use private/incognito browsing mode always",
            "Clear all browsing history after use if you must use monitored devices"
          ],
          nextSteps: "Follow our Safe Communication Checklist when you can access it safely. Professional support is available 24/7."
        }
      }
    }
  },
  safetyAssessment: {
    id: "safety-assessment",
    title: "Digital Safety Assessment",
    description: "Get personalized guidance for your current situation",
    startNode: "initial",
    nodes: {
      initial: {
        question: "What best describes your current digital safety concern?",
        options: [
          {
            text: "Someone is monitoring or controlling my digital activities",
            next: "monitoring-control"
          },
          {
            text: "My accounts or devices may have been compromised",
            next: "potential-compromise"
          },
          {
            text: "I'm experiencing online harassment or threats",
            next: "harassment-threats"
          },
          {
            text: "Private images/videos of me have been shared without consent",
            next: "image-abuse"
          },
          {
            text: "I want to protect my privacy and stay safe online",
            next: "prevention-privacy"
          },
          {
            text: "I'm supporting someone who is experiencing digital abuse",
            next: "supporting-others"
          }
        ]
      },
      "monitoring-control": {
        question: "Who do you think is monitoring or controlling your digital activities?",
        options: [
          {
            text: "Current or former intimate partner",
            next: "partner-monitoring"
          },
          {
            text: "Family member or someone I live with",
            next: "family-monitoring"
          },
          {
            text: "Someone I know (friend, colleague, etc.)",
            next: "known-person-monitoring"
          },
          {
            text: "Unknown person or stranger",
            next: "unknown-monitoring"
          },
          {
            text: "I'm not sure who, but I suspect monitoring",
            next: "suspected-monitoring"
          }
        ]
      },
      "partner-monitoring": {
        question: "What type of monitoring or control are you experiencing from your partner?",
        options: [
          {
            text: "They demand passwords to my accounts",
            next: "password-demands"
          },
          {
            text: "They check my phone, computer, or browsing history",
            next: "device-checking"
          },
          {
            text: "They seem to know where I go or who I talk to",
            next: "location-communication-tracking"
          },
          {
            text: "They control my access to technology or internet",
            next: "tech-access-control"
          },
          {
            text: "Multiple forms of digital control",
            next: "multiple-control"
          }
        ]
      },
      "password-demands": {
        guidance: {
          title: "Password Demands and Digital Control",
          content: "Demanding passwords is a form of digital abuse and violates your privacy rights. You have the right to digital privacy even in relationships.",
          immediateActions: [
            "Know that demanding passwords is not normal or acceptable in healthy relationships",
            "If safe to do so, change passwords when they're not around",
            "Use private browsing mode when possible",
            "Consider creating separate accounts they don't know about",
            "Document instances of password demands if safe to do so"
          ],
          nextSteps: "Consider reaching out to domestic violence services for support and safety planning. Use our Digital Safety Planning resources when it's safe to access them."
        }
      },
      "device-checking": {
        guidance: {
          title: "Device Monitoring by Partner",
          content: "Regular checking of your devices is a serious violation of your privacy and a form of digital abuse.",
          immediateActions: [
            "Use private/incognito browsing mode to avoid leaving history",
            "Clear browsing history and downloads if safe to do so",
            "Be cautious about what you save on monitored devices",
            "Consider using trusted friends' devices for private communication",
            "Delete sensitive messages but keep abusive ones as evidence if safe"
          ],
          nextSteps: "This behavior is concerning. When safe, contact domestic violence services and use our Safety Planning resources."
        }
      },
      "potential-compromise": {
        question: "What makes you think your accounts or devices might be compromised?",
        options: [
          {
            text: "Friends say they received messages I didn't send",
            next: "unauthorized-messages"
          },
          {
            text: "I can't access my accounts or passwords were changed",
            next: "locked-out-accounts"
          },
          {
            text: "Unknown apps appeared on my device",
            next: "unknown-apps-found"
          },
          {
            text: "My device is acting strangely (slow, hot, battery drain)",
            next: "device-behavior-changes"
          },
          {
            text: "Someone knows information they shouldn't have access to",
            next: "leaked-information"
          }
        ]
      },
      "unauthorized-messages": {
        guidance: {
          title: "Unauthorized Messages Sent",
          content: "Messages being sent from your accounts without your knowledge indicates serious account compromise.",
          immediateActions: [
            "Change passwords on ALL affected accounts immediately",
            "Enable two-factor authentication on all accounts",
            "Sign out all devices from your accounts",
            "Inform your contacts that your accounts were compromised",
            "Check for any changes to account settings or recovery information"
          ],
          nextSteps: "Follow our Email Security Checklist and Account Recovery process to fully secure your accounts."
        }
      },
      "harassment-threats": {
        question: "What type of online harassment or threats are you experiencing?",
        options: [
          {
            text: "Threatening or abusive messages on social media or text",
            next: "threatening-messages"
          },
          {
            text: "Someone created fake accounts to contact me",
            next: "fake-accounts-harassment"
          },
          {
            text: "My personal information was shared publicly online",
            next: "doxxing-harassment"
          },
          {
            text: "Someone is impersonating me online",
            next: "impersonation-harassment"
          },
          {
            text: "Continuous contact despite blocking them",
            next: "persistent-harassment"
          }
        ]
      },
      "threatening-messages": {
        guidance: {
          title: "Threatening or Abusive Messages",
          content: "Online threats and abusive messages are serious and may be criminal. Your safety matters.",
          immediateActions: [
            "Take screenshots of all threatening messages (include timestamps)",
            "Do not respond to or engage with the threats",
            "Block the person on all platforms immediately",
            "Report the threats to the platform using their reporting tools",
            "If threats mention violence or real-world harm, contact Gardaí"
          ],
          nextSteps: "Save all evidence safely and consider contacting Women's Aid (1800 341 900) for support and guidance on next steps."
        }
      },
      "prevention-privacy": {
        question: "What aspect of digital privacy and safety would you like to focus on?",
        options: [
          {
            text: "Making my social media accounts more private and secure",
            next: "social-media-privacy"
          },
          {
            text: "Protecting my location information and movements",
            next: "location-privacy-focus"
          },
          {
            text: "Securing my email and online accounts",
            next: "account-security-focus"
          },
          {
            text: "General device security and safe browsing practices",
            next: "device-security-focus"
          },
          {
            text: "Understanding what digital abuse looks like",
            next: "digital-abuse-education"
          }
        ]
      },
      "social-media-privacy": {
        guidance: {
          title: "Social Media Privacy Protection",
          content: "Securing your social media accounts is essential for maintaining privacy and safety online.",
          immediateActions: [
            "Set all your profiles to private (friends/followers only)",
            "Remove personal information like phone numbers and addresses from profiles",
            "Turn off location sharing and geotagging in all apps",
            "Review your friends/followers list and remove people you don't trust",
            "Check privacy settings for who can find you by email or phone number"
          ],
          nextSteps: "Complete our Social Media Privacy Checklist for detailed steps on each platform."
        }
      },
      "supporting-others": {
        question: "How would you like to support someone experiencing digital abuse?",
        options: [
          {
            text: "I see someone being harassed online",
            next: "witnessing-harassment"
          },
          {
            text: "A friend told me they're experiencing digital abuse",
            next: "friend-disclosure"
          },
          {
            text: "I want to learn about digital abuse to help others",
            next: "education-helping"
          },
          {
            text: "I need resources to share with someone",
            next: "resource-sharing"
          }
        ]
      },
      "witnessing-harassment": {
        guidance: {
          title: "Responding to Online Harassment",
          content: "Witnessing online harassment can be distressing, but there are safe ways to help.",
          immediateActions: [
            "Take screenshots of the harassment for evidence (include usernames, timestamps)",
            "Report the abusive content using the platform's reporting tools",
            "Reach out privately to the person being harassed to offer support",
            "Do not engage directly with the harasser - this can escalate the situation",
            "If threats mention violence, alert the person being targeted and consider contacting Gardaí"
          ],
          nextSteps: "Focus on supporting the person being harassed and helping them access professional support services."
        }
      },
      "digital-abuse-education": {
        guidance: {
          title: "Understanding Digital Abuse",
          content: "Digital abuse includes monitoring, controlling, harassing, or threatening someone using technology.",
          immediateActions: [
            "Learn the signs: password demands, device checking, location tracking, threatening messages",
            "Understand that digital abuse often happens alongside other forms of abuse",
            "Know that victims deserve privacy and respect in their digital lives",
            "Remember that the abuser is responsible for their behavior, not the victim",
            "Learn about available resources and support services"
          ],
          nextSteps: "Share information about digital safety resources with others and support anyone who discloses abuse to you."
        }
      }
    }
  },
  relationshipSafety: {
    id: "relationship-safety",
    title: "Relationship & Digital Safety",
    description: "Guidance for digital safety in controlling relationships",
    startNode: "initial",
    nodes: {
      initial: {
        question: "What kind of digital monitoring or control are you experiencing?",
        options: [
          {
            text: "Partner checks my phone/computer regularly",
            next: "device-checking"
          },
          {
            text: "They seem to know where I've been",
            next: "location-tracking"
          },
          {
            text: "They know about my online activities/messages",
            next: "online-monitoring"
          },
          {
            text: "They control my access to technology",
            next: "tech-control"
          },
          {
            text: "I'm worried about planning to leave safely",
            next: "safety-planning"
          }
        ]
      },
      "device-checking": {
        question: "How often do they check your devices?",
        options: [
          {
            text: "Constantly - they demand to see everything",
            next: "constant-monitoring"
          },
          {
            text: "Regularly - several times a week",
            next: "regular-checking"
          },
          {
            text: "Sometimes - when they're suspicious",
            next: "suspicious-checking"
          },
          {
            text: "They've installed apps to monitor me",
            next: "monitoring-apps"
          }
        ]
      },
      "constant-monitoring": {
        guidance: {
          title: "Intensive Digital Control",
          content: "Constant device monitoring is a serious form of abuse. Your safety and privacy matter.",
          immediateActions: [
            "If safe: use a trusted friend's device to access help",
            "Consider using private/incognito browsing when possible",
            "Learn about local support services",
            "Know that this behavior is not normal or acceptable",
            "Remember: you deserve privacy and respect"
          ],
          nextSteps: "When it's safe, use our Safety Planning Checklist. Consider reaching out to domestic violence services."
        }
      },
      "monitoring-apps": {
        guidance: {
          title: "Monitoring Software Installed",
          content: "Hidden monitoring apps are a serious violation of your privacy and autonomy.",
          immediateActions: [
            "Do NOT remove apps immediately if unsafe to do so",
            "Document evidence of monitoring if safe",
            "Use a different, secure device for private communication",
            "Contact domestic violence helpline for guidance",
            "Plan for your safety first"
          ],
          nextSteps: "Follow our Device Security Checklist when it's safe. Priority is your physical safety."
        }
      },
      "safety-planning": {
        question: "What aspect of digital safety planning concerns you most?",
        options: [
          {
            text: "Communicating safely for help",
            next: "safe-communication"
          },
          {
            text: "Hiding my plans from monitoring",
            next: "hiding-plans"
          },
          {
            text: "Securing new accounts/devices",
            next: "new-accounts"
          },
          {
            text: "Protecting my location after leaving",
            next: "location-safety"
          }
        ]
      },
      "safe-communication": {
        guidance: {
          title: "Safe Communication Planning",
          content: "Communicating safely while being monitored requires careful planning.",
          immediateActions: [
            "Use a trusted friend's phone/computer when possible",
            "Consider using public computers at libraries",
            "Learn helpline numbers by heart",
            "Use private/incognito browsing mode",
            "Clear browser history after use if safe to do so"
          ],
          nextSteps: "Follow our Safe Communication Checklist for detailed guidance on staying connected safely."
        }
      },
      "hiding-plans": {
        guidance: {
          title: "Concealing Digital Activity",
          content: "Hiding safety planning from monitoring requires specific techniques.",
          immediateActions: [
            "Use private browsing mode always",
            "Clear all browser history and downloads",
            "Use different devices when possible",
            "Avoid saving any safety-related bookmarks",
            "Consider using code words with trusted friends"
          ],
          nextSteps: "Use our Digital Hiding Checklist, but remember: your physical safety is most important."
        }
      },
      "tech-control": {
        guidance: {
          title: "Technology Access Control",
          content: "Controlling your access to technology is a form of isolation and abuse.",
          immediateActions: [
            "Know that this is a form of abuse",
            "Use any brief access to research help resources",
            "Memorize important phone numbers",
            "Know locations of public computers/phones",
            "Connect with trusted friends/family when possible"
          ],
          nextSteps: "When you have access, use our Technology Access Checklist to plan for independence."
        }
      },
      "regular-checking": {
        guidance: {
          title: "Regular Device Monitoring",
          content: "Regular checking of your devices is a serious violation of your privacy.",
          immediateActions: [
            "Recognize this as controlling behavior",
            "Use private browsing when possible",
            "Clear history if safe to do so",
            "Consider using trusted friends' devices for private communication",
            "Document the controlling behavior if safe"
          ],
          nextSteps: "When safe, follow our Safety Planning Checklist for guidance on protecting your privacy."
        }
      },
      "suspicious-checking": {
        guidance: {
          title: "Suspicious Device Checking",
          content: "Even occasional device checking shows concerning controlling behavior.",
          immediateActions: [
            "Use private browsing mode",
            "Be cautious about what you save on the device",
            "Consider deleting browsing history regularly",
            "Use code words with trusted friends",
            "Trust your instincts about your safety"
          ],
          nextSteps: "Consider using our Safety Planning resources when you feel ready."
        }
      },
      "online-monitoring": {
        guidance: {
          title: "Online Activity Monitoring",
          content: "Monitoring your online activities is a form of digital stalking and control.",
          immediateActions: [
            "Change passwords if safe to do so",
            "Check for monitoring apps or keyloggers",
            "Use private browsing mode",
            "Consider creating separate, secret accounts",
            "Reach out for support when it's safe"
          ],
          nextSteps: "Follow our Digital Privacy Protection Checklist when it's safe to do so."
        }
      },
      "location-tracking": {
        guidance: {
          title: "Location Tracking by Partner",
          content: "Being tracked by a partner is a serious form of surveillance and control.",
          immediateActions: [
            "Check your phone for tracking apps",
            "Turn off location sharing if safe",
            "Consider leaving phone at home occasionally if safe",
            "Vary your routes and routines when possible",
            "Tell trusted friends about the tracking"
          ],
          nextSteps: "Use our Location Privacy Checklist when it's safe to access it."
        }
      },
      "new-accounts": {
        guidance: {
          title: "Securing New Accounts",
          content: "Setting up secure, private accounts is crucial for safety planning.",
          immediateActions: [
            "Use a different device if possible",
            "Create new email from a safe location",
            "Use strong, unique passwords",
            "Enable two-factor authentication",
            "Don't use names or details they know"
          ],
          nextSteps: "Follow our Account Security Setup checklist for complete protection."
        }
      },
      "location-safety": {
        guidance: {
          title: "Post-Separation Location Safety",
          content: "Protecting your location after leaving requires careful digital planning.",
          immediateActions: [
            "Turn off all location sharing",
            "Change all account passwords",
            "Check for tracking apps on all devices",
            "Consider getting a new phone if possible",
            "Review social media privacy settings"
          ],
          nextSteps: "Complete our Post-Separation Digital Safety Checklist."
        }
      }
    }
  },
  socialMediaSafety: {
    id: "social-media-safety",
    title: "Social Media & Online Safety",
    description: "Protect yourself on social platforms",
    startNode: "initial",
    nodes: {
      initial: {
        question: "What social media safety concern do you have?",
        options: [
          {
            text: "Someone is harassing me online",
            next: "harassment"
          },
          {
            text: "My accounts keep getting hacked",
            next: "account-hacking"
          },
          {
            text: "Someone is impersonating me",
            next: "impersonation"
          },
          {
            text: "I'm worried about my privacy settings",
            next: "privacy-settings"
          },
          {
            text: "Someone is sharing my private information",
            next: "doxxing"
          }
        ]
      },
      "harassment": {
        question: "What type of harassment are you experiencing?",
        options: [
          {
            text: "Threatening messages or comments",
            next: "threats"
          },
          {
            text: "Unwanted contact after blocking",
            next: "persistent-contact"
          },
          {
            text: "Sharing intimate images without consent",
            next: "image-abuse"
          },
          {
            text: "Creating fake accounts to contact me",
            next: "fake-accounts"
          }
        ]
      },
      "threats": {
        guidance: {
          title: "Online Threats",
          content: "Online threats should be taken seriously and documented.",
          immediateActions: [
            "Screenshot all threatening messages",
            "Report to the platform immediately",
            "Block the user on all platforms",
            "Consider reporting to police if threats are serious",
            "Tell trusted friends/family about the situation"
          ],
          nextSteps: "Follow our Online Harassment Documentation Checklist and consider legal advice."
        }
      },
      "doxxing": {
        guidance: {
          title: "Personal Information Exposed",
          content: "Having private information shared online is serious and potentially dangerous.",
          immediateActions: [
            "Document where your information is posted",
            "Report to platforms for removal",
            "Consider changing phone number/email if shared",
            "Alert local police if you feel unsafe",
            "Review all privacy settings immediately"
          ],
          nextSteps: "Use our Anti-Doxxing Checklist to secure your personal information."
        }
      },
      "account-hacking": {
        guidance: {
          title: "Repeated Account Compromise",
          content: "Multiple account breaches suggest systematic targeting or poor security practices.",
          immediateActions: [
            "Change passwords on ALL accounts immediately",
            "Enable two-factor authentication everywhere",
            "Check for monitoring software on your devices",
            "Review account recovery methods",
            "Consider if someone has access to your primary email"
          ],
          nextSteps: "Follow our Complete Account Security Audit to prevent future breaches."
        }
      },
      "impersonation": {
        guidance: {
          title: "Account Impersonation",
          content: "Someone creating fake accounts pretending to be you is serious identity theft.",
          immediateActions: [
            "Report impersonation accounts to platforms immediately",
            "Screenshot fake profiles as evidence",
            "Alert friends and family about impersonation",
            "Monitor search results for your name",
            "Consider reporting to police if serious harm"
          ],
          nextSteps: "Use our Identity Protection Checklist to prevent future impersonation."
        }
      },
      "privacy-settings": {
        guidance: {
          title: "Social Media Privacy Review",
          content: "Regularly reviewing privacy settings is essential for digital safety.",
          immediateActions: [
            "Set all profiles to private/friends only",
            "Remove personal information from public view",
            "Review who can find you by email/phone",
            "Turn off location sharing and geotagging",
            "Limit who can see your friends list"
          ],
          nextSteps: "Complete our Social Media Privacy Checklist for comprehensive protection."
        }
      },
      "persistent-contact": {
        guidance: {
          title: "Continued Contact After Blocking",
          content: "Circumventing blocks to continue contact is harassment and stalking behavior.",
          immediateActions: [
            "Document all attempts to contact you",
            "Report new accounts to platforms",
            "Block new accounts immediately",
            "Save screenshots of all harassment",
            "Consider reporting to authorities"
          ],
          nextSteps: "Follow our Persistent Harassment Documentation process and consider legal action."
        }
      },
      "image-abuse": {
        guidance: {
          title: "Non-Consensual Image Sharing",
          content: "Sharing intimate images without consent is illegal in many places and deeply harmful.",
          immediateActions: [
            "Document where images are posted",
            "Report to platforms immediately for removal",
            "Contact a specialized helpline for support",
            "Consider legal action - this may be criminal",
            "Reach out to trusted friends for emotional support"
          ],
          nextSteps: "Contact specialized legal and emotional support services for this serious violation."
        }
      },
      "fake-accounts": {
        guidance: {
          title: "Fake Accounts for Contact",
          content: "Creating fake accounts to contact someone is stalking behavior.",
          immediateActions: [
            "Report all fake accounts to platforms",
            "Block accounts immediately",
            "Screenshot evidence of fake accounts",
            "Consider making your accounts more private",
            "Alert trusted contacts about fake accounts"
          ],
          nextSteps: "Document this pattern and consider reporting to authorities for stalking."
        }
      }
    }
  }
};

export const checklists = {};