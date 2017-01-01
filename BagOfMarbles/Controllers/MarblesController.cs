using BagOfMarbles.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BagOfMarbles.Controllers
{
	public class MarblesController : ApiController
	{
		public static List<Marble> bagContents = new List<Marble>() {
			new Marble {Color = "Blue" }
		};

		// GET: Marbles
		public IHttpActionResult Get()
		{
			return Ok(bagContents);
		}

		// POST: Add a marble
		[HttpPost]
		public IHttpActionResult Add(Marble marble)
		{
			bagContents.Add(marble);
			return Ok(bagContents);

		}
	}
}
