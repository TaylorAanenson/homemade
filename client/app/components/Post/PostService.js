let routeURL = "http://localhost:3000/posts"

export const _loadPosts = () => {
	return fetch(routeURL).then(res => res.json())
}

export const _addPosts = (title, location_id, user_id, price, information, ingredients) => {
	 return fetch(routeURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        location_id,
        user_id,
        price,
        information,
        ingredients,
      }),
    }).then(res => res.json());
}