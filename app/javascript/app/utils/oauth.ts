const instagramAuthURL = (): string => {
  const CLIENT_ID = process.env.INSTAGRAM_CLIENT_ID
  const REDIRECT = process.env.SITE_URL + '/omniauth/callback'
  const SCOPE = "basic+public_content+likes+comments+relationships+follower_list"
  const URL = `https://api.instagram.com/oauth/authorize/?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT}&response_type=code&scope=${SCOPE}`

  return URL
}

export {
  instagramAuthURL,
}