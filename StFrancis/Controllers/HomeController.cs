﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using StFrancis.Models;

namespace StFrancis.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult PastoralTeam()
        {
            return View();
        }

      
          public IActionResult NwodoDetail()
        {
            return View();
        }

        public IActionResult LambertDetail()
        {
            return View();
        }

        public IActionResult DianaDetail()
        {
            return View();
        }

        public IActionResult IniobongDetail()
        { 
            return View();
        }

        public IActionResult MichealDetail() 
        {
            return View();
        }


        public IActionResult PatrickDetail()
        {
            return View();
        }

        public IActionResult AboutUS()
        { 
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }


    }
}
