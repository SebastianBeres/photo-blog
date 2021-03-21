import useSWR from 'swr';
import request from 'graphql-request';

const usePosts = (slug?: string) => {
	const fetcher = (query) =>
		request(
			'https://api-eu-central-1.graphcms.com/v2/ckmj2z3qxvkjd01z63awifu9h/master',
			query
		);

	const postsAll = `{posts { id, slug }`;
	const postBySlug = `{posts (where: {slug: "${slug}"}) { id, title }}`;
	const { data, error } = useSWR(slug ? postBySlug : postsAll, fetcher);

	return error ? console.log('Error') : !data ? console.log('Loading') : data;
};

export default usePosts;
