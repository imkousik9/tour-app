export default async function handler(req, res) {
  if (req.query.secret !== process.env.REVALIDATE_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const slug = req.query.slug;

  try {
    await res.revalidate(`/tour/${slug}`);

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}
