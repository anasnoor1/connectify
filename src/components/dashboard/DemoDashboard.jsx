import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, LayoutDashboard, Users, TrendingUp, MessageSquare, CheckCircle, Clock, AlertCircle, Calendar } from 'lucide-react';

const DemoDashboard = () => {
  const { type } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data for brand dashboard
  const brandData = {
    totalCampaigns: 5,
    activeCampaigns: 2,
    proposals: 8,
    pendingPayments: 3,
    totalSpent: 15000,
    campaigns: [
      {
        id: 1,
        name: "Summer Fashion Campaign",
        status: "Active",
        influencers: 3,
        budget: 5000,
        progress: 65
      },
      {
        id: 2,
        name: "Tech Review Series",
        status: "Active",
        influencers: 2,
        budget: 4000,
        progress: 40
      },
      {
        id: 3,
        name: "Beauty Collab",
        status: "Proposal Review",
        influencers: 5,
        budget: 3000,
        progress: 0
      }
    ],
    recentProposals: [
      {
        id: 1,
        influencer: "Sarah Mitchell",
        campaign: "Summer Fashion Campaign",
        amount: 1500,
        status: "Pending",
        date: "2024-03-15"
      },
      {
        id: 2,
        influencer: "John Chen",
        campaign: "Tech Review Series",
        amount: 2000,
        status: "Accepted",
        date: "2024-03-14"
      }
    ]
  };

  // Sample data for influencer dashboard
  const influencerData = {
    totalProposals: 12,
    acceptedCount: 5,
    pendingCount: 4,
    earnings: 8500,
    followers: 125000,
    engagementRate: 4.8,
    proposals: [
      {
        id: 1,
        campaign: "Summer Fashion Campaign",
        brand: "StyleCo",
        budget: 1500,
        status: "Accepted",
        deadline: "2024-04-15"
      },
      {
        id: 2,
        campaign: "Tech Review Series",
        brand: "TechHub",
        budget: 2000,
        status: "Pending",
        deadline: "2024-04-20"
      },
      {
        id: 3,
        campaign: "Beauty Collab",
        brand: "BeautyPlus",
        budget: 1200,
        status: "Pending",
        deadline: "2024-04-25"
      }
    ],
    campaigns: [
      {
        id: 1,
        name: "Summer Fashion Campaign",
        brand: "StyleCo",
        status: "In Progress",
        daysLeft: 15,
        deliverables: 3
      },
      {
        id: 2,
        name: "Tech Review Series",
        brand: "TechHub",
        status: "Not Started",
        daysLeft: 20,
        deliverables: 5
      }
    ]
  };

  const isBrand = type === 'brand';
  const data = isBrand ? brandData : influencerData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="w-full px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {isBrand ? "Brand Dashboard" : "Influencer Dashboard"}
              </h1>
              <p className="text-sm text-gray-500">Demo View - Sign up to manage your profile</p>
            </div>
          </div>
          <Link
            to="/signup"
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition text-sm font-medium"
          >
            Sign Up
          </Link>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {isBrand ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Total Campaigns</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">{data.totalCampaigns}</p>
                  </div>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Active Campaigns</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">{data.activeCampaigns}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Proposals</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">{data.proposals}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Total Spent</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">${(data.totalSpent / 1000).toFixed(1)}K</p>
                  </div>
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-pink-600" />
                  </div>
                </div>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Total Proposals</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">{data.totalProposals}</p>
                  </div>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Accepted</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">{data.acceptedCount}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Earnings</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">${(data.earnings / 1000).toFixed(1)}K</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Followers</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">{(data.followers / 1000).toFixed(0)}K</p>
                  </div>
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-pink-600" />
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main content */}
          <div className="lg:col-span-2 space-y-6">
            {isBrand ? (
              <>
                {/* Active Campaigns */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
                >
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Campaigns</h2>
                  <div className="space-y-4">
                    {data.campaigns.map((campaign) => (
                      <div key={campaign.id} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900">{campaign.name}</h3>
                            <p className="text-sm text-gray-500">{campaign.influencers} influencers • ${campaign.budget}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            campaign.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {campaign.status}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full"
                            style={{ width: `${campaign.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">{campaign.progress}% Complete</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </>
            ) : (
              <>
                {/* Active Proposals */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
                >
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Proposals</h2>
                  <div className="space-y-4">
                    {data.proposals.map((proposal) => (
                      <div key={proposal.id} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-gray-900">{proposal.campaign}</h3>
                            <p className="text-sm text-gray-500">{proposal.brand} • ${proposal.budget}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            proposal.status === 'Accepted' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {proposal.status}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">Deadline: {new Date(proposal.deadline).toLocaleDateString()}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </div>

          {/* Right Column - Stats/Activity */}
          <div className="space-y-6">
            {isBrand && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Proposals</h2>
                <div className="space-y-3">
                  {data.recentProposals.map((proposal) => (
                    <div key={proposal.id} className="border-l-4 border-indigo-500 bg-indigo-50 rounded p-3">
                      <p className="font-semibold text-sm text-gray-900">{proposal.influencer}</p>
                      <p className="text-xs text-gray-600 mt-1">${proposal.amount}</p>
                      <span className={`inline-block mt-2 px-2 py-1 rounded text-xs font-medium ${
                        proposal.status === 'Accepted' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {proposal.status}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {!isBrand && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Stats</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm text-gray-600">Engagement Rate</p>
                      <p className="text-sm font-semibold text-gray-900">{data.engagementRate}%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full"
                        style={{ width: `${data.engagementRate * 10}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-xs text-gray-500 mb-2">Pending Proposals: {data.pendingCount}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6"
        >
          <h3 className="font-semibold text-gray-900 mb-2">This is a Demo Dashboard</h3>
          <p className="text-gray-700 text-sm">
            This is a preview of what you'll see when you sign up and create your account. All data shown here is sample data. 
            <Link to="/signup" className="text-indigo-600 font-semibold hover:underline ml-1">
              Sign up now
            </Link>
            to start managing your real campaigns and proposals.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default DemoDashboard;
