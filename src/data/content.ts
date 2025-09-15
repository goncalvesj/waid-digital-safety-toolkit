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
      "social-monitored": {
        guidance: {
          title: "Social Media Activity Monitored",
          content: "Someone knowing your social media activities in detail suggests they're monitoring your accounts or devices.",
          immediateActions: [
            "Change passwords on all social media accounts when safe",
            "Enable two-factor authentication on all accounts",
            "Check your devices for monitoring apps",
            "Review who has access to your accounts",
            "Use private browsing mode for all social media activity"
          ],
          nextSteps: "Follow our Social Media Security Checklist when safe. Consider professional support if this is relationship abuse - Women's Aid 1800 341 900."
        }
      },
      "general-monitoring": {
        guidance: {
          title: "General Digital Activity Monitoring",
          content: "Someone having general knowledge of your online activities could indicate various forms of monitoring.",
          immediateActions: [
            "Use private/incognito browsing mode",
            "Check your devices for monitoring software",
            "Review who has access to your accounts and devices",
            "Consider using different devices for private activities",
            "Change passwords if safe to do so"
          ],
          nextSteps: "Use our Digital Privacy Checklist to assess and improve your security when it's safe to do so."
        }
      },
      "partner-monitoring": {
        guidance: {
          title: "Partner Monitoring Your Activities",
          content: "Digital monitoring by a partner is a form of abuse and violates your privacy rights.",
          immediateActions: [
            "Know that this behavior is not acceptable in healthy relationships",
            "Use private browsing mode when possible",
            "Consider using trusted friends' devices for private communication",
            "Document the monitoring behavior if safe to do so",
            "Reach out for support when it's safe"
          ],
          nextSteps: "Your safety is important. Contact Women's Aid (1800 341 900) for confidential support and safety planning."
        }
      },
      "device-symptoms": {
        question: "How long have you noticed these symptoms?",
        options: [
          {
            text: "Recently - in the past few days",
            next: "recent-symptoms"
          },
          {
            text: "For several weeks",
            next: "ongoing-symptoms"
          },
          {
            text: "Symptoms come and go",
            next: "intermittent-symptoms"
          },
          {
            text: "Symptoms started after a specific event",
            next: "event-triggered-symptoms"
          }
        ]
      },
      "recent-symptoms": {
        guidance: {
          title: "Recent Device Performance Issues",
          content: "Recent performance changes could indicate new monitoring software or other security issues.",
          immediateActions: [
            "Check for recently installed apps you don't recognize",
            "Restart your device and see if symptoms persist",
            "Run a security scan if you have antivirus software",
            "Check your data usage for unusual activity",
            "Consider if someone had recent access to your device"
          ],
          nextSteps: "Follow our Device Security Checklist to investigate further and secure your device."
        }
      },
      "ongoing-symptoms": {
        guidance: {
          title: "Persistent Device Issues",
          content: "Ongoing performance problems may indicate monitoring software or device compromise.",
          immediateActions: [
            "Check your installed apps list for unfamiliar applications",
            "Review your device permissions and recently granted access",
            "Monitor your data usage patterns",
            "Consider if someone has ongoing access to your device",
            "Use a different device for sensitive activities"
          ],
          nextSteps: "Use our Spyware Detection Guide and consider professional help if you suspect deliberate monitoring."
        }
      },
      "intermittent-symptoms": {
        guidance: {
          title: "Intermittent Device Problems",
          content: "Symptoms that come and go could indicate remote monitoring that activates periodically.",
          immediateActions: [
            "Note when symptoms occur - is there a pattern?",
            "Check for apps running in the background",
            "Monitor your data usage during symptom periods",
            "Review recent app installations and updates",
            "Consider who might have access to monitor your device remotely"
          ],
          nextSteps: "Document the patterns and follow our Advanced Device Security Checklist for investigation."
        }
      },
      "event-triggered-symptoms": {
        question: "What event occurred before you noticed these symptoms?",
        options: [
          {
            text: "Someone borrowed or had access to my device",
            next: "device-access-symptoms"
          },
          {
            text: "I downloaded a new app or file",
            next: "download-related-symptoms"
          },
          {
            text: "After a relationship conflict or breakup",
            next: "relationship-triggered-symptoms"
          },
          {
            text: "After clicking a link or visiting a website",
            next: "web-triggered-symptoms"
          }
        ]
      },
      "device-access-symptoms": {
        guidance: {
          title: "Device Issues After Someone Had Access",
          content: "Performance problems after someone accessed your device could indicate installed monitoring software.",
          immediateActions: [
            "Check for any new apps installed since they had access",
            "Change all your passwords immediately",
            "Review app permissions that may have been granted",
            "Check browser history for any activity you didn't do",
            "Consider that monitoring software may have been installed"
          ],
          nextSteps: "This is concerning. Follow our Post-Access Security Checklist and consider professional help."
        }
      },
      "download-related-symptoms": {
        guidance: {
          title: "Issues After Downloading Something",
          content: "Problems after downloading could indicate malware or unwanted software installation.",
          immediateActions: [
            "Identify and uninstall the recently downloaded app if suspicious",
            "Run a full security scan of your device",
            "Check what permissions were granted to new apps",
            "Clear browser downloads and cache",
            "Monitor your accounts for any unauthorized activity"
          ],
          nextSteps: "Use our Malware Removal Guide and secure your accounts as a precaution."
        }
      },
      "relationship-triggered-symptoms": {
        guidance: {
          title: "Device Issues After Relationship Conflict",
          content: "Device problems following relationship issues could indicate deliberate monitoring or sabotage.",
          immediateActions: [
            "This pattern suggests possible deliberate monitoring",
            "Check for apps you didn't install",
            "Use a different device for sensitive activities if possible",
            "Document the timeline and symptoms",
            "Consider that this may be digital abuse"
          ],
          nextSteps: "This is serious. Contact Women's Aid (1800 341 900) for support and use our Digital Abuse Response Checklist."
        }
      },
      "web-triggered-symptoms": {
        guidance: {
          title: "Issues After Web Activity",
          content: "Problems after clicking links or visiting websites could indicate malware infection.",
          immediateActions: [
            "Clear your browser cache and cookies",
            "Run a security scan immediately",
            "Check for any new browser extensions or bookmarks",
            "Change passwords if you entered any after clicking the link",
            "Monitor accounts for suspicious activity"
          ],
          nextSteps: "Follow our Browser Security Recovery Guide and monitor your accounts closely."
        }
      },
      "unknown-apps": {
        question: "What type of apps did you find that you didn't install?",
        options: [
          {
            text: "Apps with suspicious names or no clear purpose",
            next: "suspicious-apps"
          },
          {
            text: "Apps that seem related to monitoring or tracking",
            next: "monitoring-apps-found"
          },
          {
            text: "Multiple apps I don't recognize",
            next: "multiple-unknown-apps"
          },
          {
            text: "Apps that are hidden or hard to find",
            next: "hidden-apps"
          }
        ]
      },
      "suspicious-apps": {
        guidance: {
          title: "Suspicious Unknown Apps Found",
          content: "Finding apps with unclear purposes that you didn't install is a serious security concern.",
          immediateActions: [
            "Take screenshots of the apps (names, permissions, install dates)",
            "Do NOT open or interact with these apps",
            "Research the app names online to understand their purpose",
            "Check when they were installed - note any patterns",
            "Consider who might have had access to install them"
          ],
          nextSteps: "Follow our Unknown App Investigation Guide before deciding whether to remove them."
        }
      },
      "monitoring-apps-found": {
        guidance: {
          title: "Potential Monitoring Apps Discovered",
          content: "Finding apps designed for monitoring or tracking indicates someone may be deliberately spying on you.",
          immediateActions: [
            "DO NOT remove the apps immediately if this could put you in danger",
            "Document everything about these apps (screenshots, names, permissions)",
            "Consider who installed them and why",
            "Use a different device for private communications",
            "Plan for your safety if this is domestic abuse"
          ],
          nextSteps: "This is serious surveillance. Contact Women's Aid (1800 341 900) for safety planning guidance."
        }
      },
      "multiple-unknown-apps": {
        guidance: {
          title: "Multiple Unknown Apps Found",
          content: "Multiple unfamiliar apps suggest systematic compromise or monitoring of your device.",
          immediateActions: [
            "Document all unknown apps with screenshots",
            "Note installation dates and permissions",
            "Do not use this device for sensitive activities",
            "Consider using a trusted friend's device for private communication",
            "Think about who might have had access to install multiple apps"
          ],
          nextSteps: "This indicates serious device compromise. Follow our Comprehensive Security Response Guide."
        }
      },
      "hidden-apps": {
        guidance: {
          title: "Hidden or Concealed Apps Found",
          content: "Apps that are intentionally hidden are designed to operate without your knowledge - this is very concerning.",
          immediateActions: [
            "This indicates deliberate covert monitoring",
            "Do NOT remove apps if it could escalate abuse",
            "Document everything about these hidden apps",
            "Assume all device activity is being monitored",
            "Use alternative devices for any private communication"
          ],
          nextSteps: "Hidden monitoring apps indicate serious digital abuse. Contact professionals immediately for safety planning."
        }
      },
      "location-tracking": {
        question: "How do they seem to know about your location?",
        options: [
          {
            text: "They know specific places I've been",
            next: "specific-locations"
          },
          {
            text: "They know my general whereabouts or routines",
            next: "general-locations"
          },
          {
            text: "They arrive at places where I am unexpectedly",
            next: "unexpected-appearances"
          },
          {
            text: "They mention details about my trips or outings",
            next: "trip-details"
          }
        ]
      },
      "specific-locations": {
        guidance: {
          title: "Specific Location Tracking",
          content: "Someone knowing your exact locations indicates active tracking through your device or other means.",
          immediateActions: [
            "Turn off location sharing in all apps if safe to do so",
            "Check for location-tracking apps on your device",
            "Review which apps have location permissions",
            "Consider that your vehicle might have tracking devices",
            "Check for shared location services (Find My iPhone, Google Location Sharing)"
          ],
          nextSteps: "Follow our Location Privacy Protection Guide and consider if this is related to abuse or stalking."
        }
      },
      "general-locations": {
        guidance: {
          title: "General Location Monitoring",
          content: "Knowledge of your general whereabouts could come from various tracking methods.",
          immediateActions: [
            "Review your social media for location information",
            "Check if location services are enabled on your device",
            "Look for apps that track or share your location",
            "Consider if your routine is predictable",
            "Think about who might have access to your location data"
          ],
          nextSteps: "Use our Privacy Settings Review to limit location sharing and increase your privacy."
        }
      },
      "unexpected-appearances": {
        guidance: {
          title: "Unexpected Appearances by Someone",
          content: "Someone appearing unexpectedly at your locations is very concerning and may indicate stalking behavior.",
          immediateActions: [
            "This behavior may constitute stalking - take it seriously",
            "Document dates, times, and locations of unexpected appearances",
            "Vary your routines and routes when possible",
            "Tell trusted people about these incidents",
            "Consider reporting to Gardaí if you feel unsafe"
          ],
          nextSteps: "Contact Women's Aid (1800 341 900) for stalking support and safety planning guidance."
        }
      },
      "trip-details": {
        guidance: {
          title: "Knowledge of Trip Details",
          content: "Someone knowing specific details about your outings suggests monitoring of your communications or location.",
          immediateActions: [
            "Check your device for location tracking",
            "Review your social media posts for location information",
            "Consider if they have access to your calendar or messages",
            "Think about who you shared trip details with",
            "Check for monitoring apps that track communications"
          ],
          nextSteps: "This suggests comprehensive monitoring. Follow our Digital Privacy Audit to identify the source."
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
      "sent-folder-messages": {
        guidance: {
          title: "Unauthorized Messages in Sent Folder",
          content: "Finding messages in your sent folder that you didn't write indicates serious account compromise.",
          immediateActions: [
            "Change your password immediately",
            "Enable two-factor authentication",
            "Sign out all devices from your account",
            "Check for email forwarding rules you didn't create",
            "Review account recovery information (backup email, phone)"
          ],
          nextSteps: "Someone has had access to your account. Follow our Complete Account Recovery Guide and alert your contacts."
        }
      },
      "settings-changed": {
        guidance: {
          title: "Account Settings Changed Without Permission",
          content: "Unauthorized changes to your account settings indicate someone else has accessed your account.",
          immediateActions: [
            "Change your password immediately",
            "Review all account settings and reverse unauthorized changes",
            "Enable two-factor authentication",
            "Check for email forwarding or automatic signatures",
            "Review privacy and security settings"
          ],
          nextSteps: "Secure your account completely with our Account Security Checklist and monitor for further unauthorized activity."
        }
      },
      "security-alerts": {
        guidance: {
          title: "Security Alerts for Unknown Logins",
          content: "Security alerts about logins you didn't make indicate someone is accessing your accounts.",
          immediateActions: [
            "Change passwords immediately",
            "Sign out all devices from your accounts",
            "Enable two-factor authentication on all accounts",
            "Review where the unknown logins came from (location, device)",
            "Check if any account information was changed"
          ],
          nextSteps: "Follow our Account Breach Response Guide and monitor all accounts for suspicious activity."
        }
      },
      "social-locked-out": {
        guidance: {
          title: "Social Media Accounts Locked Out",
          content: "Being locked out of social media accounts could indicate hijacking or deliberate password changes.",
          immediateActions: [
            "Use account recovery options (phone, email, security questions)",
            "Contact the platform's support immediately",
            "Alert friends that your account may be compromised",
            "Check if unauthorized posts were made",
            "Document everything for potential reporting"
          ],
          nextSteps: "Social media hijacking can be part of harassment. Use our Social Media Recovery Guide and consider support."
        }
      },
      "multiple-locked-out": {
        guidance: {
          title: "Multiple Accounts Locked Out",
          content: "Being locked out of multiple accounts suggests coordinated targeting or systematic compromise.",
          immediateActions: [
            "This indicates serious, systematic targeting",
            "Contact all affected services immediately",
            "Use alternative contact methods (phone numbers, backup emails)",
            "Alert trusted contacts about the compromise",
            "Consider if someone deliberately targeted you"
          ],
          nextSteps: "Multiple account lockouts are serious. Contact Women's Aid (1800 341 900) if this is related to abuse."
        }
      },
      "financial-locked-out": {
        guidance: {
          title: "Financial Account Access Lost",
          content: "Being locked out of financial accounts is extremely serious and requires immediate action.",
          immediateActions: [
            "Contact your bank or financial institution immediately by phone",
            "Report potential unauthorized access",
            "Check for any unauthorized transactions",
            "Change passwords and security questions when access is restored",
            "Consider if someone might have done this deliberately"
          ],
          nextSteps: "Financial account security is critical. Follow up with your bank's fraud department and consider reporting to Gardaí."
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
      "social-threats": {
        guidance: {
          title: "Threats on Social Media",
          content: "Threats received through social media platforms are serious and should be reported.",
          immediateActions: [
            "Screenshot all threatening content with timestamps and usernames",
            "Report the threats to the platform immediately",
            "Block the person making threats on all platforms",
            "Do not respond to or engage with the threats",
            "Save evidence in multiple safe locations"
          ],
          nextSteps: "Contact Women's Aid (1800 341 900) for support. If threats are serious, report to Gardaí."
        }
      },
      "email-threats": {
        guidance: {
          title: "Threatening Emails",
          content: "Threatening emails can be traced and are serious criminal matters.",
          immediateActions: [
            "Do not reply to threatening emails",
            "Save the emails (including full headers showing sender information)",
            "Block the sender's email address",
            "Report to your email provider",
            "If threats are serious, report to Gardaí with full email evidence"
          ],
          nextSteps: "Email threats can be investigated. Keep all evidence and seek support from Women's Aid (1800 341 900)."
        }
      },
      "multi-platform-threats": {
        guidance: {
          title: "Threats Across Multiple Platforms",
          content: "Receiving threats on multiple platforms indicates escalating harassment behavior.",
          immediateActions: [
            "Document all threats across all platforms with screenshots",
            "Report to each platform individually",
            "Block the person on every platform where they contact you",
            "This pattern shows persistent targeting - take it seriously",
            "Consider that this may escalate further"
          ],
          nextSteps: "Multi-platform harassment is serious stalking behavior. Contact Women's Aid (1800 341 900) and consider reporting to Gardaí."
        }
      },
      "impersonation": {
        guidance: {
          title: "Online Impersonation",
          content: "Someone impersonating you online is identity theft and can cause serious harm to your reputation and relationships.",
          immediateActions: [
            "Screenshot all fake profiles and impersonation content",
            "Report impersonation to each platform immediately",
            "Alert friends and family about the fake accounts",
            "Monitor search results for your name regularly",
            "Document what false information is being shared"
          ],
          nextSteps: "Online impersonation is serious. Consider legal action and use our Identity Protection Checklist."
        }
      },
      "doxxing": {
        guidance: {
          title: "Personal Information Shared Publicly",
          content: "Having your private information shared online without consent is dangerous and potentially illegal.",
          immediateActions: [
            "Document where your information is posted (screenshots, URLs)",
            "Report to platforms for immediate removal",
            "Consider changing phone numbers, email addresses if they were shared",
            "Alert local police if you feel physically unsafe",
            "Review all privacy settings on your accounts"
          ],
          nextSteps: "Doxxing can lead to real-world danger. Contact Women's Aid (1800 341 900) for safety planning."
        }
      },
      "fake-accounts": {
        guidance: {
          title: "Fake Accounts Created to Contact You",
          content: "Someone creating multiple fake accounts to contact you is stalking behavior.",
          immediateActions: [
            "Report each fake account to the platforms",
            "Block all fake accounts immediately",
            "Screenshot evidence of the fake accounts",
            "Make your profiles more private to prevent future contact",
            "Alert trusted friends about the fake accounts"
          ],
          nextSteps: "This is persistent stalking behavior. Document everything and consider reporting to authorities."
        }
      },
      "persistent-harassment": {
        guidance: {
          title: "Continued Harassment Despite Blocking",
          content: "Harassment that continues despite your efforts to block it shows escalating stalking behavior.",
          immediateActions: [
            "Document every new attempt to contact you",
            "Report new accounts to platforms immediately",
            "Keep blocking and reporting - don't give up",
            "Save all evidence of the persistent pattern",
            "Consider that this behavior may escalate to real-world contact"
          ],
          nextSteps: "Persistent harassment is stalking. Contact Women's Aid (1800 341 900) and consider reporting to Gardaí."
        }
      },
      "targeted-image-sharing": {
        guidance: {
          title: "Intimate Images Sent to People You Know",
          content: "Sharing intimate images with people in your life is designed to humiliate and harm you.",
          immediateActions: [
            "Contact the people who received the images - they may be supportive",
            "Document evidence of who received the images and how",
            "Report this to Gardaí - it's illegal under Irish law",
            "Contact hotline.ie for specialized support",
            "Do not blame yourself - this is the abuser's crime"
          ],
          nextSteps: "This is serious image-based abuse. Get specialized support from hotline.ie and Women's Aid (1800 341 900)."
        }
      },
      "website-image-sharing": {
        guidance: {
          title: "Intimate Images Posted on Websites",
          content: "Images posted on websites can be harder to remove but there are specialized services to help.",
          immediateActions: [
            "Do not try to contact the website yourself",
            "Contact hotline.ie who specialize in image removal",
            "Document the websites where images appear",
            "Report to Gardaí - this is criminal behavior",
            "Get emotional support - this is traumatic"
          ],
          nextSteps: "Contact hotline.ie immediately for removal assistance and Women's Aid (1800 341 900) for emotional support."
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
      "account-security": {
        guidance: {
          title: "Email and Online Account Protection",
          content: "Securing your online accounts is fundamental to digital safety and protects your personal information.",
          immediateActions: [
            "Use strong, unique passwords for each account",
            "Enable two-factor authentication on all important accounts",
            "Review and update recovery information (backup email, phone number)",
            "Check for any unauthorised account activity or logins",
            "Remove access for apps and services you no longer use"
          ],
          nextSteps: "Follow our Complete Account Security Checklist to systematically secure all your online accounts."
        }
      },
      "location-privacy": {
        guidance: {
          title: "Location Information Protection",
          content: "Keeping your location private helps protect you from tracking and unwanted contact.",
          immediateActions: [
            "Turn off location sharing in all social media apps",
            "Disable geotagging on photos and posts",
            "Review which apps have access to your location",
            "Check Google Maps timeline and delete location history if desired",
            "Be careful about posting in real-time from locations"
          ],
          nextSteps: "Use our Location Privacy Settings Guide to thoroughly protect your whereabouts."
        }
      },
      "abuse-awareness": {
        guidance: {
          title: "Digital Abuse Warning Signs",
          content: "Understanding digital abuse helps you recognize concerning behavior in relationships and online interactions.",
          immediateActions: [
            "Learn the signs: password demands, device checking, monitoring, threats",
            "Understand that digital abuse often happens alongside other forms of abuse",
            "Know that healthy relationships respect digital privacy and boundaries",
            "Trust your instincts - if something feels controlling, it probably is",
            "Remember that abuse is always the abuser's responsibility, never the victim's"
          ],
          nextSteps: "Share this information with others and know that support is available if you or someone you know experiences digital abuse."
        }
      },
      "general-safety": {
        guidance: {
          title: "General Device and Internet Safety",
          content: "Basic security practices help protect you from various online threats and maintain your digital privacy.",
          immediateActions: [
            "Keep your devices and apps updated with latest security patches",
            "Use secure browsing habits - verify websites before entering personal information",
            "Be cautious about what you download and install",
            "Regularly back up important data",
            "Use reliable antivirus software and keep it updated"
          ],
          nextSteps: "Follow our Comprehensive Digital Safety Checklist for ongoing protection and security."
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
      "regular-control": {
        guidance: {
          title: "Regular Digital Monitoring",
          content: "Regular checking of your devices is still a violation of your privacy and a form of controlling behavior.",
          immediateActions: [
            "Understand that this is not normal behavior in healthy relationships",
            "Use private browsing mode when safe to do so",
            "Consider using trusted friends' devices for private communication",
            "Document the controlling behavior if safe to do so",
            "Trust your feelings that this isn't right"
          ],
          nextSteps: "Regular monitoring is concerning. Consider reaching out for support when you feel ready - Women's Aid (1800 341 900)."
        }
      },
      "suspicious-control": {
        guidance: {
          title: "Monitoring During Suspicious Moments",
          content: "Even occasional device checking shows controlling and jealous behavior that isn't healthy.",
          immediateActions: [
            "Recognize that checking your devices when suspicious is still controlling",
            "Use private browsing mode to protect your privacy",
            "Be cautious about what you save on your device",
            "Consider that this behavior may escalate over time",
            "Trust your instincts about your relationship"
          ],
          nextSteps: "Even intermittent control is concerning. Consider seeking support if you feel unsafe or controlled."
        }
      },
      "surveillance-concern": {
        guidance: {
          title: "Partner Surveillance and Tracking",
          content: "Being monitored by a partner is a serious form of digital abuse that violates your privacy and autonomy.",
          immediateActions: [
            "Trust your instincts - if you feel monitored, you probably are",
            "Use private browsing mode when safe to do so",
            "Check your devices for unfamiliar apps",
            "Consider that your location, communications, and online activity may be tracked",
            "Use trusted friends' devices for private communication when possible"
          ],
          nextSteps: "Surveillance is serious abuse. When safe, contact Women's Aid (1800 341 900) for specialized safety planning support."
        }
      },
      "tech-restriction": {
        guidance: {
          title: "Technology Access Control",
          content: "Controlling or restricting your access to technology is a form of isolation and abuse.",
          immediateActions: [
            "Recognize this as abusive, controlling behavior",
            "When you have access, memorize important phone numbers",
            "Know locations of public phones or computers you could use",
            "Use any brief access to research support resources",
            "Connect with trusted people when possible"
          ],
          nextSteps: "Technology control is serious abuse. Plan for independence and contact Women's Aid (1800 341 900) when you can do so safely."
        }
      },
      "safe-help-seeking": {
        guidance: {
          title: "Safe Communication for Help",
          content: "Getting help while being monitored requires careful planning to protect your safety.",
          immediateActions: [
            "Use friends' or family's devices when possible",
            "Use public computers at libraries or community centers",
            "Call from phones that aren't monitored if possible",
            "Use private/incognito browsing mode",
            "Clear all browsing history after use if safe to do so"
          ],
          nextSteps: "Women's Aid helpline: 1800 341 900. They understand digital abuse and can help you plan safely."
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
      },
      "location-safety-planning": {
        guidance: {
          title: "Location Safety Planning",
          content: "Protecting your location when leaving an abusive relationship is crucial for your physical safety.",
          immediateActions: [
            "Turn off all location sharing services on your devices",
            "Remove location permissions from apps",
            "Check for tracking apps on your devices",
            "Consider getting a new phone if possible",
            "Plan safe routes and avoid predictable patterns"
          ],
          nextSteps: "Location safety is critical. Work with Women's Aid (1800 341 900) on comprehensive safety planning."
        }
      },
      "new-account-planning": {
        guidance: {
          title: "Setting Up Secure New Accounts",
          content: "Creating secure accounts they don't know about is important for independence and safety.",
          immediateActions: [
            "Use a different device if possible",
            "Create new email from a safe location",
            "Use strong, unique passwords they wouldn't guess",
            "Enable two-factor authentication",
            "Don't use personal details they would know"
          ],
          nextSteps: "Follow our New Account Security Setup guide when you can access it safely."
        }
      },
      "concealing-planning": {
        guidance: {
          title: "Hiding Safety Planning Activities",
          content: "Concealing your safety planning is important for your protection while you prepare to leave.",
          immediateActions: [
            "Always use private/incognito browsing mode",
            "Clear all browser history and downloads",
            "Use different devices when possible",
            "Don't save safety-related bookmarks",
            "Use code words with trusted friends"
          ],
          nextSteps: "Your physical safety is most important. Work with professionals who understand abusive relationships."
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
      "location-communication-tracking": {
        guidance: {
          title: "Location and Communication Tracking by Partner",
          content: "Combined tracking of your location and communications indicates comprehensive surveillance.",
          immediateActions: [
            "This is serious, systematic monitoring and control",
            "Use different devices for private communication when possible",
            "Vary your routines and routes when safe to do so",
            "Consider that multiple forms of technology may be compromised",
            "Document the extent of monitoring if safe to do so"
          ],
          nextSteps: "Comprehensive surveillance is serious abuse. Contact Women's Aid (1800 341 900) for specialized safety planning."
        }
      },
      "tech-access-control": {
        guidance: {
          title: "Technology Access Controlled by Partner",
          content: "Controlling your access to technology is a form of isolation designed to limit your independence.",
          immediateActions: [
            "Recognize this as deliberate isolation and control",
            "Use any brief access to memorize important contact numbers",
            "Know where public phones and computers are located",
            "Connect with trusted people when you have the opportunity",
            "Plan for how to communicate in emergencies"
          ],
          nextSteps: "Technology control is serious abuse. When possible, work on safety planning with domestic violence professionals."
        }
      },
      "multiple-control": {
        guidance: {
          title: "Multiple Forms of Digital Control",
          content: "Experiencing multiple types of digital control indicates intensive abuse and surveillance.",
          immediateActions: [
            "This pattern indicates severe, systematic abuse",
            "Assume all your digital activities may be monitored",
            "Use alternative methods for private communication",
            "Plan carefully for your safety when accessing help",
            "Remember that this level of control is never acceptable"
          ],
          nextSteps: "Multiple digital controls require comprehensive safety planning. Contact Women's Aid (1800 341 900) when you can do so safely."
        }
      },
      "family-monitoring": {
        guidance: {
          title: "Family Member Monitoring",
          content: "Being monitored by family members can be especially difficult as it may involve people you live with.",
          immediateActions: [
            "Use private browsing mode on shared devices",
            "Consider using devices outside the home for private activities",
            "Be aware that family WiFi networks can be monitored",
            "Think about whether this monitoring is protective concern or controlling behavior",
            "Seek support from trusted adults outside the family if needed"
          ],
          nextSteps: "Family monitoring situations can be complex. Consider contacting support services for guidance on your specific situation."
        }
      },
      "known-person-monitoring": {
        guidance: {
          title: "Monitoring by Someone You Know",
          content: "Digital monitoring by friends, colleagues, or acquaintances is a serious violation of your privacy.",
          immediateActions: [
            "Change all passwords immediately",
            "Check for monitoring apps on your devices",
            "Review who has physical access to your devices",
            "Consider how they gained access to monitor you",
            "Document evidence of the monitoring if safe to do so"
          ],
          nextSteps: "Monitoring by people you know may indicate stalking behavior. Consider reporting to authorities and seek support."
        }
      },
      "unknown-monitoring": {
        guidance: {
          title: "Monitoring by Unknown Person",
          content: "Digital monitoring by strangers could indicate hacking, stalking, or other criminal activity.",
          immediateActions: [
            "Run security scans on all your devices",
            "Change passwords on all accounts immediately",
            "Enable two-factor authentication everywhere",
            "Check for unauthorized access to your accounts",
            "Consider reporting to Gardaí if evidence of criminal activity"
          ],
          nextSteps: "Unknown monitoring is serious. Follow our Complete Security Audit and consider professional cybersecurity help."
        }
      },
      "suspected-monitoring": {
        guidance: {
          title: "Suspected Digital Monitoring",
          content: "Trusting your instincts about potential monitoring is important for your safety and privacy.",
          immediateActions: [
            "Document any suspicious signs or behaviors you've noticed",
            "Check your devices for unfamiliar apps or changes",
            "Review your account activity for unauthorized access",
            "Use private browsing mode as a precaution",
            "Consider who might have motivation or access to monitor you"
          ],
          nextSteps: "Follow our Monitoring Investigation Checklist to determine if your suspicions are correct."
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
      "locked-out-accounts": {
        guidance: {
          title: "Locked Out of Multiple Accounts",
          content: "Being unable to access multiple accounts suggests coordinated targeting or password compromise.",
          immediateActions: [
            "Use account recovery options for each service",
            "Contact customer support for affected services",
            "Try to determine if passwords were changed or accounts were suspended",
            "Check your recovery email for any notifications",
            "Consider if someone deliberately targeted your accounts"
          ],
          nextSteps: "Multiple account lockouts are serious. Follow our Account Recovery Guide and consider if this is targeted harassment."
        }
      },
      "unknown-apps-found": {
        guidance: {
          title: "Unknown Apps Discovered on Device",
          content: "Finding apps you didn't install is a serious security concern that needs immediate attention.",
          immediateActions: [
            "Take screenshots of unknown apps (names, permissions, install dates)",
            "Research the apps online before removing them",
            "Check what permissions these apps have",
            "Consider who might have installed them",
            "Think about when they might have been installed"
          ],
          nextSteps: "Follow our Unknown App Investigation Guide before deciding how to proceed with removal."
        }
      },
      "device-behavior-changes": {
        guidance: {
          title: "Unusual Device Behavior",
          content: "Changes in device performance can indicate malware, monitoring software, or other security issues.",
          immediateActions: [
            "Note when the behavior started and any patterns",
            "Check which apps are running in the background",
            "Monitor data usage for unusual activity",
            "Run security scans if you have antivirus software",
            "Consider recent downloads, app installations, or device access by others"
          ],
          nextSteps: "Use our Device Behavior Analysis Guide to investigate the cause of performance changes."
        }
      },
      "leaked-information": {
        guidance: {
          title: "Someone Knows Information They Shouldn't",
          content: "When someone has access to information they shouldn't, it indicates a serious privacy breach.",
          immediateActions: [
            "Document what specific information they know",
            "Think about how they could have accessed this information",
            "Check your devices for monitoring software",
            "Review your account activity for unauthorized access",
            "Consider changing passwords and security settings"
          ],
          nextSteps: "Information leaks can indicate stalking or abuse. Document everything and consider professional support."
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
      "fake-accounts-harassment": {
        guidance: {
          title: "Harassment Through Fake Accounts",
          content: "Someone creating fake accounts to contact you is stalking behavior and a serious violation.",
          immediateActions: [
            "Report all fake accounts to the platforms immediately",
            "Block each fake account as you discover them",
            "Screenshot evidence of the fake accounts",
            "Make your accounts more private to prevent further contact",
            "Document the pattern of fake account creation"
          ],
          nextSteps: "This is persistent stalking behavior. Consider reporting to authorities and seek support from Women's Aid (1800 341 900)."
        }
      },
      "doxxing-harassment": {
        guidance: {
          title: "Personal Information Shared as Harassment",
          content: "Having your personal information shared publicly as harassment is dangerous and potentially illegal.",
          immediateActions: [
            "Document everywhere your information appears (screenshots, URLs)",
            "Report to platforms for immediate removal",
            "Consider changing exposed phone numbers or email addresses",
            "Alert local police if you feel physically unsafe",
            "Contact close contacts to warn them about the situation"
          ],
          nextSteps: "Doxxing for harassment purposes is serious. Contact Women's Aid (1800 341 900) for safety planning support."
        }
      },
      "impersonation-harassment": {
        guidance: {
          title: "Impersonation as Form of Harassment",
          content: "Someone impersonating you to harass you or others is identity theft and can cause serious damage.",
          immediateActions: [
            "Report impersonation accounts to platforms immediately",
            "Screenshot all fake profiles and impersonation content",
            "Alert friends, family, and contacts about the impersonation",
            "Monitor online mentions of your name regularly",
            "Document what false information is being shared"
          ],
          nextSteps: "Impersonation harassment is serious identity theft. Consider legal action and contact support services."
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
      "location-privacy-focus": {
        guidance: {
          title: "Location Privacy Protection",
          content: "Protecting your location information is crucial for personal safety and privacy.",
          immediateActions: [
            "Turn off location sharing in all social media apps",
            "Disable geotagging on photos and posts",
            "Review which apps have access to your location",
            "Turn off location history in Google/Apple services",
            "Be mindful about posting in real-time from locations"
          ],
          nextSteps: "Follow our Comprehensive Location Privacy Guide to secure your whereabouts information."
        }
      },
      "account-security-focus": {
        guidance: {
          title: "Account Security Enhancement",
          content: "Securing your online accounts protects your digital identity and personal information.",
          immediateActions: [
            "Use strong, unique passwords for every account",
            "Enable two-factor authentication on all important accounts",
            "Review and update account recovery information",
            "Remove access for unused apps and services",
            "Regularly monitor account activity for unauthorized access"
          ],
          nextSteps: "Use our Complete Account Security Audit to systematically protect all your online accounts."
        }
      },
      "device-security-focus": {
        guidance: {
          title: "Device Security and Safe Browsing",
          content: "Keeping your devices secure protects all the information and accounts stored on them.",
          immediateActions: [
            "Keep your devices updated with latest security patches",
            "Use secure lock screens and strong passcodes",
            "Be cautious about app downloads and installations",
            "Use reputable antivirus software",
            "Practice safe browsing and email habits"
          ],
          nextSteps: "Follow our Device Security Checklist for comprehensive protection of your devices."
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
      "friend-disclosure": {
        guidance: {
          title: "Supporting a Friend Who Disclosed Digital Abuse",
          content: "When someone trusts you with their experience of digital abuse, your response matters greatly.",
          immediateActions: [
            "Believe them - digital abuse is real and harmful",
            "Thank them for trusting you with this information",
            "Ask how you can best support them",
            "Don't pressure them to take specific actions",
            "Help them access professional support when they're ready"
          ],
          nextSteps: "Continue to be supportive and patient. Connect them with Women's Aid (1800 341 900) when they're ready for professional help."
        }
      },
      "education-helping": {
        guidance: {
          title: "Learning About Digital Abuse to Help Others",
          content: "Understanding digital abuse helps you recognize it and support others who may be experiencing it.",
          immediateActions: [
            "Learn the various forms: monitoring, stalking, harassment, image abuse, account takeover",
            "Understand the connection between digital and other forms of abuse",
            "Know the warning signs and patterns of controlling behavior",
            "Learn about available resources and support services",
            "Practice supportive responses to disclosure"
          ],
          nextSteps: "Share accurate information about digital abuse and always direct people to professional support services."
        }
      },
      "resource-sharing": {
        guidance: {
          title: "Sharing Resources with Someone in Need",
          content: "Providing helpful resources can support someone experiencing digital abuse.",
          immediateActions: [
            "Share Women's Aid helpline: 1800 341 900 (24/7, free, confidential)",
            "Provide information about hotline.ie for image-based abuse",
            "Share this digital safety toolkit for immediate guidance",
            "Offer practical support like lending a safe device if appropriate",
            "Respect their decisions about what help they want"
          ],
          nextSteps: "Continue to be available for support while respecting their autonomy and decisions about seeking help."
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
  }
};
