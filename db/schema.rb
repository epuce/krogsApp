# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171013180456) do

  create_table "foods", force: :cascade do |t|
    t.string   "name"
    t.string   "description"
    t.decimal  "price"
    t.integer  "group_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "order"
    t.boolean  "isActive"
  end

  create_table "groups", force: :cascade do |t|
    t.string   "text"
    t.integer  "order"
    t.boolean  "isActive"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "subgroup"
    t.integer  "suborder"
    t.boolean  "subIsActive"
  end

  create_table "maintexts", force: :cascade do |t|
    t.text     "text"
    t.boolean  "isActive"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "order"
  end

  create_table "pictures", force: :cascade do |t|
    t.integer  "order"
    t.boolean  "isActive"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.string   "name_file_name"
    t.string   "name_content_type"
    t.integer  "name_file_size"
    t.datetime "name_updated_at"
  end

  create_table "subgroups", force: :cascade do |t|
    t.string  "subgroup"
    t.integer "order"
    t.boolean "isActive"
    t.integer "group_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "password_digest"
    t.boolean  "isActive"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
