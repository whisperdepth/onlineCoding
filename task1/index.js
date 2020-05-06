function markAdmins(user, ids) {
  return user.map((user) => {
    let isAdmin = ids.includes(user.id);
    return { ...user, isAdmin };
  });
}
