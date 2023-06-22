const express = require("express");
const CarModel = require("../models/CarSchema");
const router = express.Router();


router.get("/", (req, res) => {
  CarModel.find((err, data) => {
    if (!err) {
      res.render("car/index", { car: data });
    }
  });
});

router.get("/api", (req, res) => {
  CarModel.find((err, data) => {
    if (!err) {
      res.json(data);
    }
  });
});

router.get("/add", (req, res) => {
  res.render("car/add");
});

router.post("/add", (req, res) => {
  var car = new RobotModel(req.body);
  car.save((err) => {
    if (!err) {
      console.log("Add car succeed !");
      res.redirect("/car");
    }
  });
});

router.get("/detail/:id", (req, res) => {
  //lấy giá trị id của document gửi từ url
  var robot_id = req.params.id;
  //tìm kiếm document trong collection theo id
  CarModel.findById(car_id, (err, data) => {
    if (!err) {
      //render ra file detail chứa dữ liệu của document
      res.render("car/detail", { car: data });
    }
  });
});

router.get("/delete/:id", (req, res) => {
  CarModel.findByIdAndDelete(req.params.id, (err) => {
    if (!err) {
      console.log("Delete car succeed !")
      res.redirect("/car")
    }
  })
})

router.get("/edit/:id", (req, res) => {
  CarModel.findById(req.params.id, (err, data) => {
    if (!err) {
      res.render("car/edit", { car: data })
    }
  })
})

router.post("/edit/:id", (req, res) => {
  CarModel.findByIdAndUpdate(req.params.id, req.body, (err) => {
    if (!err) {
      console.log("Edit Car succeed !")
      res.redirect("/car")
    }
  })
})

module.exports = router;
