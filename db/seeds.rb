# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(name: 'edmunds', password: 'edmunds', isActive: true)

# File.open("post.json", "w") { |f| f.write Post.all.to_json }

JSON.parse(File.read("db/data/edieni.json")).each do |item|
	if (item["group"] != false && Group.where(name: item["group"]).length == 0)
		Group.create(
			name: item["group"],
			isActive: true,
			order: Group.all.length != 0 ? Group.maximum('order') + 1 : 1,
		)
	end

	if (item["subgroup"] != false && Subgroup.where(name: item["subgroup"]).length == 0)
		Subgroup.create(
			name: item["subgroup"],
			isActive: true,
			order: Subgroup.all.length != 0 ? Subgroup.maximum('order') + 1 : 1,
			group_id: Group.where(name: item["group"]).ids[0]
		)
	end

	Food.create(
		name: item["name"],
		description: item["subgroup"] != nil ? item["description"] : nil,
		price: item["price"],
		isActive: true,
		order: Food.all.length != 0 ? Food.maximum('order') + 1 : 1,
		group_id: item["subgroup"] == nil  ? Group.where(name: item["group"]).ids[0] : nil,
		subgroup_id: item["group"].length != 0 ? Subgroup.where(name: item["subgroup"]).ids[0] : nil
	)
end
